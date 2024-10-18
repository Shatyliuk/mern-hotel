import express from "express";
import { check } from "express-validator";
import { handleLogin, validateToken, handleLogout } from "../controllers/auth";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.post(
  "/login",
  [check("email", "Email is required").isEmail(), check("password").isString()],
  handleLogin
);

router.get("/validate-token", verifyToken, validateToken);

router.post("/logout", handleLogout);

export default router;
