import express from "express";
const port = undefined;
const app = express();

app.get("/", (req, res) => {
  res.json({ health: "100%" });
});

app.listen(null, () => {
  console.log("Server is running on port 3000");
});
