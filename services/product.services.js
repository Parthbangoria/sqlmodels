const productModel = require("../models/product.model");

exports.createProduct = async (data)=>{

    try {
        let product = await  productModel.create(data);
        if(product){
            console.log ("we are good to go");
         return(product);
        }
        else{
            console.log("can<t find the user here");
        }
    } catch (error) {
        console.log( " thereis some error so we can not do it as we thought :" + error );
    }
};




exports.updateProduct = async (productId,newproduct) => {
    try {   
       let newProduct = await productModel.update(newproduct,{where : productId,
           returning : true});
       console.log(newProduct);
       if (!newProduct){
           console.log( " can not create the product");
   
       }
       else{
           return(newProduct);
       }
       
       
    } catch (error) {
       return( error);
    }
   };
   
   exports.deleteProduct = async (data) =>{
   try {
       deleteproduct = await productModel.destroy(data);
       if (!deleteproduct){
         console.log(" can not delete the user");
       }
   
       else{
           return(deleteproduct);
       }
   } catch (error) {
       console.log("error at the services :" + error); 
   }
     
   }