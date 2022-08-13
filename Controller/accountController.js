const schema = require('../Model/accountSchema')

// const validate=require()


exports.account= (req,res)=>{
    const data=req.body


    console.log('this is my req.body',data)
    res.send("registeration partially done")
    
    }
