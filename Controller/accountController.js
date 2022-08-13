const userAccount = require('../Model/accountSchema')
const bcrypt=require('bcryptjs')


exports.account= async(req,res)=>{
    const data=req.body

    const emailExist=await userAccount.findOne({email:data.email})
    if(emailExist)
    {
        console.log("email already axist")
        res.status(400).send("Email already exists")
    }

    const salt=await bcrypt.genSalt(10)

    const hashedPassword=await bcrypt.hash(data.password,salt)

    

    
    

    console.log('this is my req.body',data)
    res.send("registeration partially done")
    
    }
