const mongoose = require("mongoose");

var Schema = mongoose.Schema;
let productSchema = new Schema(
  {
    name: { type: String, required: true},
    imgURL: { type: String},
    price: { type: Number, required: true },
    desc: { type: String },
    categories: { type: Array },
    inStock: { type: Boolean, default: true },
    color: { type: Array },
    code: { type: String },
    size: { type: Array },
    rating: { type: Number },
    discount: { type: Boolean },
    discountPercent: { type: Number },
    brand: { type: String },
    tag: { type: Array },
  },
  { timestamps: true }
);

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
