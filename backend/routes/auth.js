const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const { validateLogin, validateRegister } = require("./validator");

router.post("/register", (req, res) => {
  const { error, value } = validateRegister(req.body);
  if (error) {
    res.status(500).json(error.message);
  } else {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(req.body.password, salt, async function (err, hash) {
        const user = new User({
          name: req.body.firstName,
          email: req.body.email,
          password: hash,
        });
        const accessToken = jwt.sign(
          {
            id: user.id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          { expiresIn: "2d" }
        );
        try {
          const foundUser = await user.save();

          res.status(201).json({ foundUser, accessToken });
        } catch (err) {
          if (err.code === 11000) {
            if (err.keyPattern.email) {
              res.status(500).json("email address already exist");
            }
          } else {
            res.status(500).json(err);
          }
        }
      });
    });
  }
});
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const { error, value } = validateLogin(req.body);
  if (error) {
    res.status(500).json(error.message);
  } else {
    User.findOne({ email: email }, function (err, foundUser) {
      try {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password, function (err, result) {
            if (result === true) {
              const accessToken = jwt.sign(
                {
                  id: foundUser.id,
                  isAdmin: foundUser.isAdmin,
                },
                process.env.JWT_SEC,
                { expiresIn: "2d" }
              );
              res.status(200).json({ foundUser, accessToken });
            } else if (result !== true) {
              res.status(401).json("wrong password !");
            }
          });
        } else {
          res.status(404).json("user not found !");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    });
  }
});

module.exports = router;
