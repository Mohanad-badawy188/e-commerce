const {
  verifyTokenAndAuth,
  verifyToken,
  adminVerifyToken,
} = require("./verifyToken");
var router = require("express").Router();
const Product = require("../models/product");
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
var mongoose = require("mongoose");
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;

const { ReadStream } = require("fs");
const { validateFilters, validateRelated } = require("./validator");
let gfs, gridfsBucket;
router.use(methodOverride("_method"));

const conn = mongoose.createConnection(process.env.DATABASE);
conn.once("open", () => {
  // Init stream
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads",
  });
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

const storage = new GridFsStorage({
  url: process.env.DATABASE,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/upload", upload.single("file"), (req, res) => {
  res.send({ file: req.file });
});

router.put("/:id", adminVerifyToken, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", adminVerifyToken, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/image/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ err: "noo file exists!" });
    }
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      const readstream = gridfsBucket.openDownloadStreamByName(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

router.get("/", async (req, res) => {
  const page = parseInt(req.query.page || "0");
  const Limit = req.query.limit || 20;
  const qlast6 = req.query.last6;
  const latest = req.query.latest;

  const qCategory = req.query.category;

  // const qbrand = req.query.brand;
  // const qrating = req.query.rating;
  // const qprice = req.query.price;
  // const qdiscount = req.query.discount;
  let Total = await Product.countDocuments({});
  try {
    let products;
    if (qCategory) {
      Total = await Product.find({
        categories: {
          $in: [qCategory],
        },
      }).countDocuments({});
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      }).limit(Limit);
    } else {
      products = await Product.find()
        .limit(Limit)
        .skip(Limit * page);
    }

    const TotalPages = Math.ceil(Total / Limit);

    res.status(200).json({ products, Total, TotalPages });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/filter", async (req, res) => {
  const page = parseInt(req.query.page || "0");
  const Limit = req.query.limit || 20;
  const sort = req.body.sort || "Latest";
  let sortBy;
  if (sort === "Latest") {
    sortBy = { createdAt: -1 };
  } else if (sort === "price(asc)") {
    sortBy = { price: 1 };
  } else if (sort === "Price(desc)") {
    sortBy = { price: -1 };
  }

  let Total = await Product.countDocuments({});
  const TotalPages = Math.ceil(Total / Limit);
  let products;
  if (req.body.searchItem) {
    let data = { name: { $regex: req.body.searchItem, $options: "i" } };
    try {
      products = await Product.find(data)
        .limit(Limit)
        .skip(Limit * page)
        .sort(sortBy);
      Total = await Product.find(data).countDocuments({});
      const TotalPages = Math.ceil(Total / Limit);

      res.status(200).json({ products, Total, TotalPages });
    } catch (e) {
      res.status(500).json(e);
    }
  } else if (
    req.body.brands ||
    req.body.categories ||
    req.body.ratings ||
    req.body.discounts ||
    req.body.prices
  ) {
    const { error, value } = validateFilters(req.body);
    if (error) {
      res.status(500).json(error);
    } else {
      const brands = req.body.brands;
      const categories = req.body.categories;
      const ratings = req.body.ratings;
      const discounts = req.body.discounts;
      const prices = req.body.prices;
      const discountOffers = [];
      if (discounts) {
        discounts.map((item) => discountOffers.push(parseInt(item)));
      }

      let data = {
        $or: [
          ...(brands ? [{ brand: { $in: brands } }] : []),
          ...(categories?.length ? [{ categories: { $in: categories } }] : []),
          ...(ratings?.length ? [{ rating: { $in: ratings } }] : []),
          ...(discounts?.length
            ? [{ discountPercent: { $in: discountOffers } }]
            : []),
          ...(prices?.length
            ? prices.map((item) => {
                return {
                  price: {
                    $gt: item.minValue,
                    $lt: item.maxValue,
                  },
                };
              })
            : []),
        ],
      };

      try {
        products = await Product.find(data)
          .limit(Limit)
          .skip(Limit * page)
          .sort(sortBy);
        Total = await Product.find(data).countDocuments({});
        const TotalPages = Math.ceil(Total / Limit);

        res.status(200).json({ products, Total, TotalPages });
      } catch (e) {
        res.status(500).json(e);
      }
    }
  } else {
    products = await Product.find()
      .limit(Limit)
      .skip(Limit * page)
      .sort(sortBy);
    res.status(200).json({ products, Total, TotalPages });
  }
});
router.post("/filter/related", async (req, res) => {
  const Limit = req.query.limit || 4;

  let products;
  if (req.body.brands || req.body.categories) {
    const { error, value } = validateRelated(req.body);
    if (error) {
      res.status(500).json(error);
    } else {
      const brands = req.body.brands;
      const categories = req.body.categories;

      let data = {
        $or: [
          ...(brands ? [{ brand: { $in: brands } }] : []),
          ...(categories?.length ? [{ categories: { $in: categories } }] : []),
        ],
      };

      try {
        products = await Product.find(data).limit(4);

        Total = await Product.find(data).countDocuments({});
        const TotalPages = Math.ceil(Total / Limit);

        res.status(200).json({ products, Total, TotalPages });
      } catch (e) {
        res.status(500).json(e);
      }
    }
  } else {
    products = await Product.find().limit(4);

    res.status(200).json({ products, Total, TotalPages });
  }
});
module.exports = router;
