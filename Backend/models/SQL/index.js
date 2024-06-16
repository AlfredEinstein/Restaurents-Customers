const User=require('./user');
const Menu=require('./menu');
const Restaurent=require('./restaurent');
const sequelize=require('../../config/database');
const connectToMongo=require('../../config/mongodb');

const intitalizeSQL=async()=>{
    try{
        console.log("Connecting to SQL...");
        await sequelize.sync({alert:true});
        
        console.log("Connected to SQL !!!");
    }catch(error){
        console.log(`Error while connecting to SQL : ${error}`);
    }
};

module.exports={User,Menu,Restaurent,intitalizeSQL,connectToMongo};