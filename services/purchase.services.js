const purchaseModel = require("../models/purchase.model");
const customerModel = require("../models/customer.model");
const productModel = require("../models/product.model");

exports.createPurchase = async(data)=>{
      try {
        let {customerId,productId} = data;
        let customerid = await customerModel.findByPk(customerId);
        if(!customerid){
          return({error:true,
          message:" customerid not found"});
        };
        let productid = await productModel.findByPk(productId);
       if(!productid){
         return({error:true,
          message:" productid not found"});
       };
        if(customerid && productid){
            let purchase = await purchaseModel.create(data);
            if ( purchase){
                return(purchase);

            }else{
                console.log("can't create the purchase");
            }
        }
      } catch (error) {
        console.log(" here we got into some trouble" + error);
        
      }
};