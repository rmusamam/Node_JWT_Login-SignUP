const router= require('express').Router();
const accountControll= require('../Controller/accountController')
const validateRegisteration=require('../Middleware/validation')


router.route('/register').post(validateRegisteration,accountControll.account)

module.exports=router