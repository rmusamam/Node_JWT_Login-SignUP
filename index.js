const express = require ('express')
const app = express()
const mongoose= require('mongoose')
const route=require('./Route/account.js')
const bodyParser=require('body-parser')
const dotenv= require('dotenv')
dotenv.config()

const port = process.env.PORT||3000

//  app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/',route)


const url= process.env.DB_CONNECTION.replace('<password>',process.env.PASSWORD)


 mongoose.connect(url,{
    useNewUrlParser:true
 }).then(()=>console.log("DB connected"))


app.listen(port,()=>{
    console.log(`server active on ${port}`)
})