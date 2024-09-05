const mongoose = require("mongoose");
require('dotenv').config()

// const uri = process.env.DATABASE;

const connectDB = (uri) => {
  return mongoose.connect(uri).then(() => console.log("Database Connected"));
};

module.exports = connectDB;
