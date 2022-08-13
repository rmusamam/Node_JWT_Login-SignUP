const mongoose= require('mongoose')

const schema = mongoose.Schema({
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

module.exports=schema