import express from "express";
import { updateUsername } from "../Controller/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Update username (protected route)
router.put("/update", verifyToken, updateUsername);

export default router;
