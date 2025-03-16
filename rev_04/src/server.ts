import express from "express";
import { PORT } from "./constants/env";
import connectDB from "./db";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: "Healthy" });
});

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is listening on ${PORT}`)
    })
})