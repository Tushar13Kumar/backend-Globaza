const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: String,
  products: [String] // array of product IDs (string only)
},
{timestamps: true,}
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
module.exports = Wishlist;
