const userSchema = require("../Model/accountSchema");

const emailExist = async (req, res, next) => {
  const data = req.body;
  console.log('in middleware: ', data)
  const existAlready = await userSchema.exists({ email: req.body.email });
  console.log(existAlready);
  //  console.log("this EMAIL checking data middleware function",existAlready);
  if (existAlready) {
    res.status(400).send("Email already exist");
  } else {
    return next();
  }
};

module.exports = emailExist;
