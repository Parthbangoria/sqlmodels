const sequelize = require("../config/database");
const { DataTypes } =  require("sequelize");
const productModel = sequelize.define('product',{

    productname : {
        type : DataTypes.STRING,
        allowNull : true
    },
    producttype : {
        type : DataTypes.STRING,
        allowNull : true
    } 

},{
    tableName : 'products'
})

module.exports = productModel;