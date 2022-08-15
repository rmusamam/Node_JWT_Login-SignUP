const jwt=require('jsonwebtoken')

module.exports.verifyToken= (req,res,next)=>{
    console.log('in verifying Token req.path:',req.path);
    if(req.path=='/login' || req.path=='/register'){
        
        return next()
    }
    else{
        console.log('in verifyToken req.token: ',req.token)
        jwt.verify(req.token,process.env.TOKEN,(err,authdata)=>{
            console.log('error of token : ',err)
            if(err){
                res.json(err)
            }
            else{
                res.json({
                    message:'ok',
                    authdata
                })
            }
        })
    }
}