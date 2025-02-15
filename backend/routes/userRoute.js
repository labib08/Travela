import express from "express";
import { createAccount, loginAccount } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", loginAccount)
userRouter.post("/create", createAccount);





export default userRouter;