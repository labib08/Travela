import express from "express";
import { createAccount } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/create", createAccount);





export default userRouter;