const jwt = require('jsonwebtoken');
const {secret} = require('../config/jwt');

module.exports=(req,res,next)=>{
    const token=req.headers['authorization'];
    if(token){
        jwt.verify(token,secret,(err,decoded)=>{
            if(err){
                return res.status(401).json({error:'Invalid Token'});
            }else{
                req.userId = decoded.id;
                next();
            }
        })
    }else{
        res.status(401).json({error:'No Token Provided.'})
    }
}