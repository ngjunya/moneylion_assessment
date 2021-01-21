const Sequelize=require("sequelize");
const sequelize = require("../database/connection");

module.exports=sequelize.define("users",{
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    featureName:Sequelize.STRING(20),
    email:Sequelize.STRING(20),
    enable:Sequelize.BOOLEAN
})