const { validProduct } = require("../validations/valid");

const { ProductModel } = require("../models/productModel");

exports.productReq = {
    productsList: async(req,res) => {
        try {
           const data = await ProductModel.find({},{updatedAt:0, __v:0}) 
           res.status(201).json(data);
        } catch (error) {
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
    addProduct: async(req,res) => {
        const validBody = validProduct(req.body);
        if (validBody.error) {
            return res.status(400).json(validBody.error.details);
        }
        try {
            const product = await ProductModel.create(req.body);
            res.status(201).json(product);
        
        } catch (error) {
           console.log(error);
           res.status(502).json({msg_err:error}) 
        }
    },
    deleteProduct: async(req,res) => {
        const {id} = req.params;
        try{
            const data = await ProductModel.deleteOne({_id:id})
            return res.status(201).json(data); 
        }
        catch(error){
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
    editProduct: async(req,res) => {
        const {id} = req.params;
        const validBody = validProduct(req.body);
        if (validBody.error) {
            return res.status(400).json(validBody.error.details);
        }
        try{
           const data = await ProductModel.updateOne({_id:id},req.body)
           res.status(201).json(data);
        }
        catch(error){
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
    setInStock: async(req,res) => {
        const {id, changeInStock} = req.params;
        try {
            const data = await ProductModel.updateOne({_id:id}, {inStock:changeInStock});
            res.status(201).json(data);
        } catch (error) {
            console.log(error);
            res.status(502).json({msg_err:error})
        } 
    },
}