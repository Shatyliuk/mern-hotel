import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import path from "path";

mongoose.connect(process.env.MONGODB_CONNECTION_URL as string).then(() => {
  console.log("connected to db: ", process.env.MONGODB_CONNECTION_URL);
});

const app = express();
const port = 7001;

app.use(express.static(path.join(__dirname, "../../frontend/dist")));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/api/test", (req, res) => {
  res.json({
    message: "Express endpoint",
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
