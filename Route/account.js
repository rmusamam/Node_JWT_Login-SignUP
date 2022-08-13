const router = require("express").Router();
const accountControll = require("../Controller/accountController");
const validateRegisteration =require('../Middleware/validation')
const email = require("../Middleware/email");

router.route("/register",).post(email, validateRegisteration, accountControll.account);

module.exports = router;