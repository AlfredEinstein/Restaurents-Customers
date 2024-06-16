const {Restaurent}=require('../models/SQL');
const restaurentAddress=require('../models/MongoDB/restaurentAddress');
const restaurentImages= require('../models/MongoDB/restaurentImages');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const {secret}=require('../config/jwt');

exports.register= async(req,res)=>{
    const {restaurentName, phoneNumber, email, password, Address}=req.body;
    const hasedPassword=await bcrypt.hash(password,10);
    try{
        const restaurent=await Restaurent.create({restaurentName,phoneNumber,email,password:hasedPassword});
        const address=new restaurentAddress({...Address,restaurentId:restaurent.id});
        await address.save();
        res.status(200).json({restaurent:restaurent,address:address});
    }catch(error){
        res.status(401).json({error:error.message});
    }
}

exports.login=async(req,res)=>{
    const {email,password}=req.body;
    const restaurent= await Restaurent.findOne({where:{email}});
    if(restaurent && bcrypt.compare(password,restaurent.password)){
        const token= jwt.sign({id:restaurent.id},secret,{expiresIn:'1h'});
        res.status(201).json({restaurent:restaurent, token:token});
    }else{
        res.status(401).json({error:"user not found."});
    }
}

exports.uploadImages=async(req,res)=>{
    const {restaurentId}=req.body;
    const file=req.file;
    if(!file){
        return res.status(400).json({error:'no file uploaded'})
    }
    const base64Image=file.buffer.toString('base64');
    try{
        const image = new restaurentImages({restaurentId,image:base64Image});
        await image.save();
        res.status(201).json(image);
    }catch(error){
        res.status(401).json({error:error.message});
    }
};