import express from "express";
import { forget, login, register, verifyOtp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.post('/forget', forget)
router.post('/confirmOtp/:id', verifyOtp)

export default router;