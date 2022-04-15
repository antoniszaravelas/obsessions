import express from "express";
const router = express.Router();
import registerUser from "../controllers/registerUser.js";

router.post("/register", registerUser)


export default router;