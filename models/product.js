const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required:true
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  rating: {
    type: Number,
    required:[true,"Rating must be provided"]
  },
  createdAt:{
    type:Date,
    default:Date.now()
  },
  company:{
    type:String,
    required:true
  }
});
module.exports=mongoose.model('Product',productSchema)