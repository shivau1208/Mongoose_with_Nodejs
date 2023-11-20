const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./model/User");

mongoose.connect(process.env.DATABASE_URL);
async function run() {
  const newUser = new User({
    firstName: "Shiva",
    Age: 27,
  });
  newUser
    .save()
    .then(() => {
      console.log(newUser);
    })
    .catch((error) => {
      console.error("Error saving user:", error);
    })
    .finally(() => {
      // Close the MongoDB connection after saving
      mongoose.connection.close();
    });
}
run();
