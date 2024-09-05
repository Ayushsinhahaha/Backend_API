const express = require("express");
const app = express();
const connectDB = require("./db/connect.js");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const products_routes = require("./routes/products.js");

app.get("/", (req, res) => {
  res.send("Request from Api");
});

// middleware
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.DATABASE)
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
