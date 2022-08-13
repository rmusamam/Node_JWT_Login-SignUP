const express = require ('express')
const app = express()
const mongoose= require('mongoose')
const route=require('./Route/account.js')
const bodyParser=require('body-parser')

//  app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const url= process.env.DB_CONNECTION
mongoose.connect(url,{
    useNewUrlParser:true
},
()=>{
    console.log('DB connected')
})


app.use('/',route)





app.listen(3000,()=>{
    console.log('server active on 3000')
})