require("dotenv").config();
const { auth } = require("./utils/auth");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const customerController = require("./controllers/customer.usercontroller");
const sequelize = require("./config/database");
const productController = require("./controllers/product.userconroller");
const purchaseController = require("./controllers/purchase.usercontroller");
const registercontroller = require("./controllers/register.usercontroller");
app.use(express.urlencoded({ extended : true }));
app.use(express.json());


app.post("/create",auth,customerController.createCustomer);
app.post("/createproduct",auth,productController.createProduct);
app.post("/createpurchase",auth,purchaseController.createPurchase);
app.post("/register", registercontroller.createUser);
app.patch("/updatecustomer",customerController.updateCustomer);
app.delete("/deletecustomer",customerController.deleteCustomer);
app.patch("/updateproduct",productController.updateProduct);
app.delete("/deleteproduct",productController.deleteCustomer);


sequelize.sync({ force: false, logging: false })
    .then(() => {
        console.log('Database is connected!');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });


app.listen("3000",(req,res)=>{
     console.log("server strated on port 3000");
});

