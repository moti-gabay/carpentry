const mongoose = require("mongoose");
const Joi = require("joi");
// const jwt = require("jsonwebtoken");
// const { config } = require("../config/secret");

const productSchema = new mongoose.Schema({
    name:String,
    image:String,
    thickness: {
        type: Array,
    },
    pricePerCm:Number,
    inStock:{
        type:Boolean, default:true
    }  
},{timestamps:true});

exports.ProductModel = mongoose.model("products",productSchema);