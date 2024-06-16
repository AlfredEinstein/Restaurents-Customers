const { User } = require('../models/SQL');
const Address = require('../models/MongoDB/userAddress');
const bcrypt= require('bcryptjs');
const jwt=require('jsonwebtoken');
const {secret}=require('../config/jwt');

exports.register=async(req,res)=>{
    const {username, email, phoneNumber, password, address}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    try{
        const user=await User.create({username,email,phoneNumber,password:hashedPassword});
        const userAddress=new Address({...address,userId:user.id});
        await userAddress.save();
        res.status(201).json({user:user,address:userAddress});
    }catch(error){
        console.log(`Error while registering user : ${error.message}`);
        res.status(400).json({error:error.message});
    }
};

exports.login=async(req,res)=>{
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }});
    if( user && await bcrypt.compare(password, user.password)){
        const token= jwt.sign({ id: user.id }, secret);
        res.json({user:user,token:token});
    }else{
        res.status(401).json({error:'Invalid credentials'});
    }
}

exports.getAll=async(req,res)=>{
    const user = await User.findAll();
    res.status(201).json(user);
}

// exports.getUserByEmail=async(req,res)=>{
//     const {}
// }