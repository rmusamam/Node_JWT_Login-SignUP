const router = require("express").Router();
const accountControll = require("../Controller/accountController");
const {validateRegisteration,validateLogin} =require('../Middleware/validateInput')
const email = require("../Middleware/emailExistCheckForValidation");

router.route("/register").post(email, validateRegisteration, accountControll.account);
router.route('/').post(validateLogin,accountControll.loginAccount)


module.exports = router;