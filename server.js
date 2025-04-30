import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

// cofigure env
dotenv.config({ path: "./.env" });

//rest obj
const app = express();

// DB config
connectDB();

//middleware
app.use(express.json());
app.use(morgan("dev"));

// routes all of them
app.use("/api/v1/auth", authRoutes );

//rest apis will be created here
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Accesso-Sync web app</h1>");
});

// PORT
const PORT = process.env.PORT || 8001;

//run the app or listen the app

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode and in port ${PORT}`.bgBlue
      .white
  );
});
