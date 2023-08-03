const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const registerModel = sequelize.define('register',{
    email:{
        type: DataTypes.STRING,
        allowNull : false
    },
    password:{
        type : DataTypes.STRING,
        allowNull : false 
    }
},{
    tablename: 'register'
})

module.exports = registerModel;