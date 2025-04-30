import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    // console.log(`Connected to MongoDB DB ${conn.connection.host}`.bgGreen.red);
    console.log(
      chalk.bgGreen.red.bold(`Connected to MongoDB DB ${conn.connection.host}`)
    );
  } catch (error) {
    console.log(`Error in MongoDb ${error}`.bgRed.white);
  }
};

export default connectDB;
