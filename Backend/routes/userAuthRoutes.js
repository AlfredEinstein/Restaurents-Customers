const express= require('express');
const {register,login, getAll}=require('../controllers/userController');

const router=express.Router();

router.post('/register',register);
router.get('/login',login);
router.get('/getAll',getAll);

module.exports=router;