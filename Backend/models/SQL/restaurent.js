const {DataTypes}=require('sequelize');
const sequelize = require('../../config/database');

const Restaurent=sequelize.define('Restaurent',{
    restaurentName:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:false,
    }
})

module.exports= Restaurent;