const {DataTypes} =require('sequelize');
const sequelize = require('../../config/database');
const Restaurent = require('./restaurent');

const Menu= sequelize.define('menu',{
    item:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    courses:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:false,
    }
    ,
    description:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    prize:{
        type:DataTypes.FLOAT,
        allowNull:true,
        unique:false,
    },
    available:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        unique:false,
    },
})

Restaurent.hasOne(Menu,{foreignKey:'restaurentId',sourceKey:'id'});
Menu.belongsTo(Restaurent,{foreignKey:'restaurentId',targetKey:'id'});

module.exports=Menu