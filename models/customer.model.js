const { DataTypes } = require('sequelize');

const sequelize = require("../config/database");

const customerModel =sequelize.define('customer',{

    name : {
        type : DataTypes.STRING,
        allowNull : true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true
    },
    age :{
        type : DataTypes.INTEGER,
        allowNull: true
    }
},{
    tableName : 'customer'
}
)

module.exports = customerModel;