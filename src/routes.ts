import express from "express";
const router= express.Router();
import { signUp } from "./controller/signup";
import { UserSignupVerify } from "./middleware/userMiddleware";
router.post('/signup',UserSignupVerify,signUp)
export default router;