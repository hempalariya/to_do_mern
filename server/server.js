require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./schema/userSchema");

const app = express();
app.use(express.json());
app.use(cors());
 
app.post("/user/register", async (req, res) => {
  console.log(req.body);
  try {
    const { fullName, email, number, password } = req.body;
    const user = await User.create({
      fullName,
      email,
      number,
      password,
    });
    if (!user) {
      throw new Error("internal server error");
    }
    res.status(200).json({
      fullName
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) throw new Error("Invalid Credentials!");
    if (userExist.password !== password)
      throw new Error("Invalid Credentials!");

    res.status(200).json({ fullName: userExist.fullName });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI).then(
  app.listen(port, () => {
    console.log("running on port", port);
  }),
);
