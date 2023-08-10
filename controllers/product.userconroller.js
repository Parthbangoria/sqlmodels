const productservices = require("../services/product.services");


exports.createProduct = async(req,res)=>{

    try {

        data = req.body;
          let product = await productservices.createProduct(data);
          if (product){
            res.status(200).send({
                massage : "we got the data",
                data: product
            });
          }
           else{
            console.log("we did not got the user");
           }
    } catch (error) {
        console.log(" we got into some trouble:"+  error);
    };

};

exports.updateProduct = async (req,res) => { 
       
    try {
        
    
    
    
    productId = {id:req.body.productId};

       newuser = {
        productname : req.body.productname,
        producttype : req.body.producttype }
    
       let updateduser = await productservices.updateProduct(productId,newuser);
       if(!updateduser){
        console.log(" there is an error");
       }
   

    } catch (error) {
        console.log(error);
    };
    
    };


exports.deleteProduct = async(req,res) =>{
    data = { where : { id : req.body.id}};

    let deletedproduct = await productservices.deleteProduct(data);


    if (deletedproduct===0){
        console.log("there is not any row deleted");
    }
    else{
        console.log(" successfully deleted row ");
    };
};