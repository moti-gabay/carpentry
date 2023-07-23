const { UserModel } = require("../models/userModel");

exports.adminReq = {
    usersList: async (req,res) => {
        try{
          const data = await UserModel
          .find({},{password:0, updatedAt:0, __v:0})
          .sort({"name":1})
          res.json(data);
        }
        catch(error){
          console.log(error);
          res.status(502).json({error})
        }
    },
    delteUserById: async (req, res) => {
        try {
          const {id} = req.params;
          // admin cant delete himself
          if(id == req.tokenData._id){
            return res.status(401).json({msg_err:"you cant delete your self"})
          }
          const data = await UserModel.deleteOne({_id:id});
          res.json(data);
        }
        catch (error) {
          console.log(error);
          res.status(502).json({ error })
        }
    },
    changeRole: async (req, res) => {
        try {
          const {role, id} = req.params;
          if(role != "user" && role != "admin"){
            return res.status(401).json({msg_arr:"Please send only admin or user role"})
          }
          // admin cant change himself
          if (id == req.tokenData._id) {
            return res.status(401).json({msg_arr:"You cant change yourself"})
          }
          const data = await UserModel.updateOne(
            {_id:id},
            {role});
          res.json(data);
        }
        catch (error) {
          console.log(error);
          res.status(502).json({error})
        }
    },
    checkAdminToken: async(req,res) => {
      res.json({status:true});
  }
}