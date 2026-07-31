require("dotenv").config();
const linkRoute = require("./routes/linkRoute");

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("URL Shortener Backend Running...");
});
app.use("/", linkRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});