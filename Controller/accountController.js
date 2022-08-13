const userAccount = require('../Model/accountSchema')


exports.account= async(req,res)=>{
    const data=req.body

    const emailExist=await userAccount.findOne({email:data.email})


    console.log('this is my req.body',data)
    res.send("registeration partially done")
    
    }
