const express=require('express');
const router=express.Router();
const auth=require('../config/auth');
const userControl=require('../controller/user_controller');
router.post('/register',userControl.registerUser);
router.post('/login',userControl.loginUser)
router.get('/verify-user',auth.Authenticate,userControl.verifyUser);
module.exports=router;