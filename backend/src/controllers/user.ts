import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User, { UserType } from "../models/user";
import { validationResult } from "express-validator";

export const handleUserRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    return;
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      res.status(400).json({ message: "User alreay exists" });
      return;
    }

    const newUser = new User(req.body);
    await newUser.save();

    const token = jwt.sign(
      { userId: newUser.id },
      process.env.JWT_SECRET_KEY!,
      { expiresIn: "1d" }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });

    res.status(200).json({ message: "User succesfully created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
