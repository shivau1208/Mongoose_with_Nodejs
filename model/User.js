const mongoose = require("mongoose");

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  firstName: String,
  age: Number,
  email: {
    type: String,
    minLength: 12,
    unique: true,
    required: true,
    lowercase: true,
  },
  address: {
    street: String,
    city: String,
    zipcode: Number,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.methods.sayHi = function () {
  console.log(`Hi... My name is ${this.firstName}`);
};

userSchema.statics.findByName = function (name) {
  return this.where({ firstName: new RegExp(name, "i") });
};

userSchema.query.byName = function (name) {
  return this.where({ firstName: new RegExp(name, "i") });
};

userSchema.virtual("namedEmail").get(function () {
  return `${this.firstName} <${this.email}>`;
});

// Create a Mongoose model based on the schema
module.exports = mongoose.model("User", userSchema);
