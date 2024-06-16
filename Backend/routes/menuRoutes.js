const express=require('express');
const upload=require('../middleware/upload');
const { addMenu } = require('../controllers/menuController');
const router=express.Router();

router.post('/addMenu',upload.single('file'),addMenu);

module.exports=router;

