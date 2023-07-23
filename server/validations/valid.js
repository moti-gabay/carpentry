const Joi = require("joi");

// valid signUp
exports.validSignUp = (reqBody) => {
    const joiSchema = Joi.object({
      name:Joi.string().min(2).max(20).required(),
      email:Joi.string().min(2).max(200).email().required(),
      password:Joi.string().min(4).max(150).required()
    })
    return joiSchema.validate(reqBody);
}
  
// validLogin
exports.validLogin = (reqBody) => {
    const joiSchema = Joi.object({
      email:Joi.string().min(2).max(200).email().required(),
      password:Joi.string().min(3).max(150).required()
    })
    return joiSchema.validate(reqBody);
} 

// valid product (admin added)
exports.validProduct = (reqBody) => {
    const joiSchema = Joi.object({
        name:Joi.string().min(2).max(20).required(),
        image:Joi.string().min(2).max(500).required(),
        pricePerCm:Joi.number().min(0.0001).max(2).required(),
        thickness:Joi.array().items(Joi.number().min(0.5).max(20)).min(1).max(5).required()
    })
    return joiSchema.validate(reqBody);
}

// valid cart item
exports.validCartItem = (reqBody) => {
    const joiSchema = Joi.object({
        name:Joi.string().min(2).max(20).required(),
        thickness:Joi.number().min(0.5).max(20).required(),
        length:Joi.number().min(5).max(300).required(),
        width:Joi.number().min(5).max(300).required(),
        amount:Joi.number().min(1).max(10).required(),
        pricePerCm:Joi.number().min(0.0001).max(2).required(),
        price:Joi.number().min(1).max(9999).required(),
    })
    return joiSchema.validate(reqBody);
}