const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: [
    {
      street: String,
      city: String,
      state: String,
      zip: String,
    },
  ],
} , {timestamps: true,}
);

const User = mongoose.model("User", userSchema);
module.exports = User;
