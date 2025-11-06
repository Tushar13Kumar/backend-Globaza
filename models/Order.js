const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
       product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number
    }
  ],
  totalAmount: Number,
  address: String,
  status: { type: String, default: "Placed" },
  createdAt: { type: Date, default: Date.now }
}, {timestamps: true,}
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
