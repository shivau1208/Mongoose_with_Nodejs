const mongoose = require("mongoose");

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  Age: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Create a Mongoose model based on the schema
module.exports = mongoose.model("User", userSchema);
