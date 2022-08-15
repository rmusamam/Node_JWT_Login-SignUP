const router = require("express").Router();
const accountControll = require("../Controller/accountController");
const main = require("../Controller/main");

const {
  validateRegisteration,
  validateLogin,
} = require("../Middleware/validateInput");
const email = require("../Middleware/emailExistCheckForValidation");
const verifyToken = require("../Middleware/verifyToken");

router.route("/register").post(email, validateRegisteration, accountControll.account);
router.route("/login").post(validateLogin, accountControll.loginAccount);
router.route("/main").get(main.mainPage);

module.exports = router;
