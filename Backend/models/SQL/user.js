const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define('User',{
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    phoneNumber:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:false,
    },
});

module.exports=User;