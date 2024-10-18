import express from "express";
import { handleUserRegister } from "../controllers/user";
import { check } from "express-validator";

const Router = express.Router();

Router.post(
  "/register",
  [
    check("email", "Email is reuqired").isEmail(),
    check("password", "Password lenght should be greater than 8")
      .isString()
      .isLength({ min: 8 }),
    check("firstName", "First name is reuqired").isString(),
    check("lastName", "Last name is required").isString(),
  ],
  handleUserRegister
);

export default Router;
