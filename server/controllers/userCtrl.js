const bcrypt = require("bcrypt");
const { validSignUp, validLogin } = require("../validations/valid");
const { UserModel, createToken } = require("../models/userModel");

exports.userReq = {
    signUp: async(req,res) => {
        const validBody = validSignUp(req.body);
        if(validBody.error){
          return res.status(400).json(validBody.error.details);
        }
        try{
          const user = await UserModel.create(req.body);
          // encoding password
          user.password = await bcrypt.hash(user.password, 10);
          await user.save();
          user.password = "*****";
          res.status(201).json(user);
        }
        catch(error){
          if(error.code == 11000){
            return res.status(401).json({msg_err:"Email user already in system",code:11000})
          }
          console.log(error);
          res.status(502).json({msg_err:error})
        }
    },
    login: async(req,res) => {
        const validBody = validLogin(req.body);
        if(validBody.error){
          return res.status(400).json(validBody.error.details);
        }
        try{
          // cheking if email exists
          const user = await UserModel.findOne({email:req.body.email});
          if(!user){
            return res.status(401).json({msg_err:"Email or password worng !"});
          }
          // cheking if password match
          const passwordValid = await bcrypt.compare(req.body.password, user.password);
          if(!passwordValid){
            return res.status(401).json({msg_err:"Email or password worng !"});
          }
          // create token for user
          const token = createToken(user._id, user.role)
          res.json({token, role:user.role});
        }
        catch(error){
          console.log(error);
          res.status(502).json({msg_err:error})
        }
    },
    getInfo: async(req, res) => {
      try {
          const user = await UserModel.findOne({ _id: req.tokenData._id }, { password: 0, __v: 0, updatedAt: 0 })
          res.json( user )
      } catch (error) {
          console.log(error);
          res.status(502).json({msg_err:error});
      }
    },
    checkToken: async(req,res) => {
        res.json({status:true});
    }

}