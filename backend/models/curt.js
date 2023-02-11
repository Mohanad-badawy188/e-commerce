const mongoose = require("mongoose");

var Schema = mongoose.Schema;
let cartSchema = new Schema(
  {
    userId: { type: String, required: true },

    product: {
      type: Object,
    },
    quantity: {
      type: Number,
      default: 1, 
    },
  },

  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
