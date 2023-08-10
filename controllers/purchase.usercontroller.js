const purchaseservices = require("../services/purchase.services");

exports.createPurchase = async (req,res)=>{
try {
    data = req.body;
let purchase = await purchaseservices.createPurchase(data);
if (purchase.error){
  return res.status(404).send({
    message: purchase.message , 
})
}
// if (purchase){
  res.status(200).send({
    massage:"we got the data succsefully",
    data: purchase,
})
// }
} catch (error) {
    return(error);
}
}





exports.deletePurchase = async(req,res) =>{
  data = { where : { id : req.body.id}};

  let deleteduser = await purchaseservices.deletePurchase(data);


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
