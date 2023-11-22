const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./model/User");

mongoose.connect(process.env.DATABASE_URL);
async function dataInsert() {
  try {
    const newUser = await User.create({
      firstName: "Shiva",
      age: 26,
      email: "test@test.com",
      address: {
        street: "8th main",
        city: "Bangalore",
        zipcode: 123456,
      },
    });
    await newUser.save();
    console.log(newUser);
  } catch (e) {
    console.log(e.message);
  }
}

async function dataFind() {
  try {
    console.log("hola!");
    // works same as mongodb query;
    // const user = await User.findOne({
    //   firstName: "Shiva",
    // });
    // console.log(user);
    // const user = await User.where("age")
    //   .gt(20)
    //   .where("firstName")
    //   .equals("Shiva")
    //   .limit(1)
    //   .select('age');
    // const user = await User.findByName("Shiva");
    // console.log(user)
    // user.sayHi()
    // console.log(user);
    // const user = await User.find().byName('Shiva')
    // console.log(user)
    // const user = await User.findOne({firstName:'Shiva',email:'test12@tst.com'})
    // console.log(user.namedEmail)
  } catch (e) {
    console.log(e.message);
  }
}

// dataInsert();
// dataFind();
