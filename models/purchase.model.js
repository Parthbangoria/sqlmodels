const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const customerModel = require("../models/customer.model");
const productModel = require("../models/product.model");


const purchaseModel = sequelize.define("purchase",{


    customerId: {
        type : DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: "customerModel",
            key: "id" }
    },
    productId :{
        type: DataTypes.INTEGER,
        allowNull: false,
        reference:{
            model: "productModel",
            key: "id"
        }
    }

},{
   tablename: "purchase",
});

purchaseModel.belongsTo(customerModel,{foreignkey : "customerId"});
purchaseModel.belongsTo(productModel,{foreignkey : "productId"});


module.exports = purchaseModel;