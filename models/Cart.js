const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: String, // simple string, not ObjectId
    items: [
      {
        productId: String, // simple string, same as product._id in JSON file
        quantity: Number,
      },
    ],
    totalPrice: Number,
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
