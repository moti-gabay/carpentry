const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  cart:{
    type: Array,
  },
  role:{
    type:String, default:"user"
  }
},{timestamps:true});

exports.UserModel = mongoose.model("users",userSchema);

exports.createToken = (user_id, role = "user") => {
  const token = jwt.sign(
    {_id:user_id, role},
    config.TOKEN_SECRET,
    {expiresIn:"43200mins"})
  return token;
}

