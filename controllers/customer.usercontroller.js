const customerServices = require("../services/customer.services");


exports.createCustomer = async(req,res)=>{

    try {
        data = req.body;
     let customer = await customerServices.createUser(data);
     if (customer){
        res.status(200).send({
            massage : " we got the data succsefully",
            data : customer
        })
     }
     else{
        console.log("user haven't created");
     }
    } catch (error) {
        console.log("we got into some troubles" + error);

    }
}

exports.updateCustomer = async (req,res) => { 
       
    try {
    userID = {id:req.body.userID};

       newUser = {
        name : req.body.name,
        email : req.body.email,
        age : req.body.age  }
    
       let updateduser = await customerServices.updateCustomer(userID,newUser);

       if(!updateduser){
        console.log(" there is an error");
       }
       else{ 
        res.status(200).send({
            message : " updated user seccessfully",
            data : updateduser
        })
       }
   

    } catch (error) {
        console.log(error);
    };
    
    };


exports.deleteCustomer = async(req,res) =>{
    data = { where : { id : req.body.id}};

    let deleteduser = await customerServices.deleteCustomer(data);


    if (deleteduser===0){
        console.log("there is not any row deleted");
    }
    else if (!deleteduser){
        console.log( "no row has been deleted");
    }
    else{
        res.status(200).send({
        message : " drpoed user successfully",
        data : deleteduser
        });
    };
};


