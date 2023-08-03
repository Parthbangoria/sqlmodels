const customerModel = require("../models/customer.model");

exports.createUser = async (data) =>
{
// console.log();
 try {
    
    let user = await customerModel.create(data);
    return(user);
} catch (error) {
 console.log("sorry we can't create your user" + error);
}
}


exports.updateCustomer = async (userId,newuser) => {
 try {   
    let newUser = await customerModel.update(newuser,{where : userId,
        returning : true});
    console.log(newuser);
    if (!newUser){
        console.log( "can not update the customer");

    }
    else{
        return(newUser);
    }
    
    
 } catch (error) {
    return( error);
 }
};

exports.deleteCustomer = async (data) =>{
try {
    deleteduser = await customerModel.destroy(data);
    if (!deleteduser){
      console.log(" can not delete the user");
    }

    else{
        return(deleteduser);
    }
} catch (error) {
    console.log("error at the services :" + error); 
}
  
}