import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import myHotelsRoutes from "./routes/myHotels";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLODUNARI_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

mongoose.connect(process.env.MONGODB_CONNECTION_URL as string).then(() => {
  console.log("connected to db: ", process.env.MONGODB_CONNECTION_URL);
});

const app = express();
const port = 7001;

app.use(express.static(path.join(__dirname, "../../frontend/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/my-hotels", myHotelsRoutes);

app.get("/api/test", (req, res) => {
  res.json({
    message: "Express endpoint",
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
