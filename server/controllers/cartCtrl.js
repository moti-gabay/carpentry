const { UserModel } = require("../models/userModel");
const { validCartItem } = require("../validations/valid");

exports.cartReq ={
    addToCart: async(req,res) => {
        const validBody = validCartItem(req.body);
        if(validBody.error){
            return res.status(400).json(validBody.error.details);
        }
        try{
            const user = await UserModel.findOne({_id:req.tokenData._id});
            req.body._id = Date.now().toString();
            user.cart.push(req.body);
            await user.save();
            return res.json(req.body)
        }
        catch (error) {
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
    deleteFromCart: async(req,res) => {
        const {id} = req.params;
        try{
            const user = await UserModel.findOne({_id:req.tokenData._id}); 
            const newCart = user.cart.filter(item => item._id !== id); 
            user.cart = newCart;
            await user.save();
            return res.status(201).json({msg:"deleted"}); 
        }
        catch (error) {
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
    changeItemAmount: async(req,res) => {
        const { id, amount } = req.params;
        try {
            const user = await UserModel.findOne({ _id: req.tokenData._id });
            const index = user.cart.findIndex(item => item._id == id);
            const {thickness, length, width, pricePerCm} = user.cart[index];
            const newAmount = parseInt(amount);
            const newPrice = Math.round((thickness * length * width * pricePerCm * newAmount) * 100) / 100;
            user.cart[index] = {...user.cart[index], amount:newAmount, price:newPrice}
            await user.save();
            return res.json(user.cart)
        }
        catch (error) {
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
    resetCart: async(req,res) => {
        try{
            const user = await UserModel.findOne({_id:req.tokenData._id}); 
            user.cart = [];
            await user.save();
            res.status(201).json({msg:"reset cart"})
        }
        catch (error) {
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    }

}