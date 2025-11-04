const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      productId: String,
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
