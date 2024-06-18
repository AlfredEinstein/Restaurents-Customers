const express = require('express');
const {register,login,uploadImages}=require('../controllers/restaurentController');
const upload = require('../middleware/upload');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register',register);
router.get('/login',login);
router.post('/uploadImage', authMiddleware ,upload.single('file'),uploadImages);

module.exports=router;
