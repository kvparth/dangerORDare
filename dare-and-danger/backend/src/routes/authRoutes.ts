import express from "express";
import { registerUser } from "../controllers/authController";

const router = express.Router();

router.post("/register", async (req, res) => {
  await registerUser(req, res);
});
// router.post("/login", loginUser);

export default router;