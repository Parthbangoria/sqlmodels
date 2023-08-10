const registerservices = require("../services/register.services");


exports.createUser = async (req,res) =>{

    try {
        let data = req.body;
        console.log(data);
        let access = await registerservices.createUser(data);
        console.log(access);
        if(access){
            res.status(200).send({
                massege : " we have suucessfully done it",
                data : access
            });
        }
    } catch (error) {
        return(error);
    }
}