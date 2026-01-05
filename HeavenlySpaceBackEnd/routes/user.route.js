import express from "express";
import { updateUser } from "../Controller/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Update user (protected route)
router.put("/update", verifyToken, updateUser);

export default router;
