import cors from "cors";
import express from "express";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})