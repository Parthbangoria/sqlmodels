const registerModel = require("../models/register.model");
const jwt = require("jsonwebtoken");
exports.createUser = async (data) =>{
    try {
        let { email,  password } = data;
        let user = await registerModel.findOne({where : {email: email}});
        console.log(user);
        if (!user){
        let newuser = await registerModel.create(data);
       if (newuser){
        console.log(newuser);
        let token = await jwt.sign({email : email },process.env.SECRET);
        return(newuser,token);
       }else{
        console.log(" we were enable to create the user");
    return;   
    }}
       else if  (user){
        let token = await jwt.sign({email : email },process.env.SECRET);
        console.log(user,token);
        return(user,token);
        
       }; }
     catch (error) {
        console.log ("there is some unexpected stuff just happend" + error);
    };


};
