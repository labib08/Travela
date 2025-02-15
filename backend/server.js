import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import pool from './config/db.js';
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err));

app.use(express.json());
app.use(cors());


app.use("/api/user", userRouter);


app.get("/", (req, res) =>{
    res.send("Welcome to Travela API");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})