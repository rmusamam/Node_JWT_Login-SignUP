const joi = require("@hapi/joi");
const userSchema= require('../Model/accountSchema')

const validateRegisteration = (req, res, next) => {
    console.log('in validation')
  const data = req.body;
//   console.log(data);
//   console.log("this validating data middleware function");
  schema = joi.object({
    email: joi.string().min(5).required(),
    name: joi.string().min(5).required(),
    password: joi.string().min(5).required(),
  });
  const Responses = schema.validate(data);
  if(!Responses.error) return next()
  res.send(Responses.error.details[0].message)
};

const emailExist= (req,res,next)=>{
  
    const data = req.body;
 const existAlready= userSchema.findOne({email:req.body.email})
 console.log(existAlready);
//  console.log("this EMAIL checking data middleware function",existAlready);
    if(existAlready)
    {
        res.status(400).send("Email already exist")
    }
    else{
        next()
    }
}

module.exports = validateRegisteration;
