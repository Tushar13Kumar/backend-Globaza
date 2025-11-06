const { initializeDatabase } = require("./db/db.connect");

// import models
const Product = require("./models/Product");
const Cart = require("./models/Cart");
const Wishlist = require("./models/Wishlist");
const Order = require("./models/Order");

async function deleteAllData() {
  try {
    await initializeDatabase(); // connect to MongoDB

    console.log("🧹 Deleting all selected collections...");

    await Product.deleteMany({});
    await Cart.deleteMany({});
    await Wishlist.deleteMany({});
    await Order.deleteMany({});

    console.log("✅ Deleted Products, Carts, Wishlist, and Orders successfully!");

  } catch (error) {
    console.log("❌ Error deleting data:", error);
  }
}

deleteAllData();
