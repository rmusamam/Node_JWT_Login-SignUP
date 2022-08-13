const userAccount = require("../Model/accountSchema");
const bcrypt = require("bcryptjs");

exports.account = async (req, res) => {
  const data = req.body;
  console.log('in controller: ', data)
//   const emailExist = await userAccount.findOne({ email: data.email });
//   if (emailExist) {
//     console.log("email already axist");
//     res.status(400).send("Email already exists");
//   }

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
