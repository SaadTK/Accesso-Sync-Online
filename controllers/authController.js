import userModel from "../models/userModel.js";
import { hashPassword } from "./../helpers/authHelper.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // user validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "email is Required" });
    }
    if (!phone) {
      return res.send({ error: "phone is Required" });
    }
    if (!password) {
      return res.send({ error: "password is Required" });
    }
    if (!address) {
      return res.send({ error: "address is Required" });
    }

    //check user
    const existingUser = await userModel.findOne({ email });

    //check for existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "User Already Registered. Please Login.",
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);

    //save
    const user = new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "USer Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registerController",
      error,
    });
  }
};
