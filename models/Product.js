const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  discount: { type: Number },
  rating: { type: Number, default: 4 },
  description: { type: String },
  size: [String],
  stock: { type: Number, default: 10 },
} , {timestamps: true,}
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
