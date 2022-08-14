const userAccount = require("../Model/accountSchema");
const bcrypt = require("bcryptjs");
const userSchema =require('../Model/accountSchema')
exports.account = async (req, res) => {
  const data = req.body;
  // console.log('in controller: ', data)


  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(data.password, salt);

  //2 ways to adding user in DB

  // const addUser= await new userAccount({
  //     email:data.email,
  //     name:data.name,
  //     password:hashedPassword
  // })

  // try{
  //     const saveUser= await addUser.save()
  //     console.log("save User: ",saveUser);
  // }
  // catch(err){
  //     res.status(400).send("Error in saving data in DB")
  // }
  const addUser = await userAccount.create({
    email: data.email,
    name: data.name,
    password: hashedPassword,
  }).then(()=>console.log("data has been saved"))

  console.log(addUser)
  res.send("registeration  done");
};



exports.loginAccount= async(req,res)=>{
  console.log('in loginAccount');
const login=await userSchema.findOne({email:req.body.email})
if(!login) return res.status(400).send("Email already exist")
console.log("email matched");
const validPassword = await bcrypt.compare(req.body.password,login.password)
if(!validPassword) return res.status(400).send("Incorrect Password")

console.log("login successfully");
}