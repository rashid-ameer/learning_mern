import express from "express";

const PORT = 5000;

const app = express();

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
