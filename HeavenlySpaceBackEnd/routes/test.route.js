import express from "express";
import { shouldbeAdmin, shouldbeLogin } from "../Controller/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/should-be-log-in",verifyToken, shouldbeLogin);

router.get("/should-be-Admin", shouldbeAdmin);

export default router;

