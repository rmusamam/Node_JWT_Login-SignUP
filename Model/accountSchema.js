const mongoose= require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        require:true,
        min:5
    },
    name:{
        type:String,
        require:true,
        min:5
    },
    password:{
        type:String,
        require:true,
        min:5
    }

})
const userAccount=mongoose.model('userAccounts',userSchema)

module.exports=userAccount