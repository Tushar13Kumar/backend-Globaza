const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },// simple string, not ObjectId
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // simple string, same as product._id in JSON file
        quantity: Number,
      },
    ],
    //totalPrice: Number,
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
