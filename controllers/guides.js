const Guide = require("../models/Guide");

exports.cancelGuide = async (req, res, next) => {
  const id = req.body._id

  Guide.updateOne({_id: id}, {$set: {guideStatus: 'Cancelada'}})
    .then( result => {
      console.log(result)
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({error:err})
    })



}

exports.getGuides = async (req, res, next) => {
  console.log(req.params, 'this is req.params')
  const currentUser = req.params.currentUser;

  try {
    const userGuides = await Guide.find({"currentUser" : currentUser});
    console.log(userGuides)
    res.status(200).json({sucess: true, data: userGuides})
  } 
  catch (err) {
    res.json({message: err})
  }
}  
  
  

exports.createGuide = async (req, res, next) => {
    const { 
    currentUser,
    guideCost,
    guideStatus,      
    fullNameSender,
    emailSender,
    phoneNumberSender,
    streetAndNumberSender,  
    referenciasSender,
    colonySender,
    postalCodeSender,
    citySender,
    mexicoStateSender,
    fullNameReceiver,
    emailReceiver,
    phoneNumberReceiver,
    streetAndNumberReceiver,  
    referenciasReceiver,
    colonyReceiver,
    postalCodeReceiver,
    cityReceiver,
    mexicoStateReceiver,
    packageLenght,
    packageWidth,
    packageHeight,
    packageWeight,
    packageDescription
     } = req.body;
    
     try {
        const guide = await Guide.create({
            currentUser,
            guideCost,      
            guideStatus,
            fullNameSender,
            emailSender,
            phoneNumberSender,
            streetAndNumberSender,  
            referenciasSender,
            colonySender,
            postalCodeSender,
            citySender,
            mexicoStateSender,
            fullNameReceiver,
            emailReceiver,
            phoneNumberReceiver,
            streetAndNumberReceiver,  
            referenciasReceiver,
            colonyReceiver,
            postalCodeReceiver,
            cityReceiver,
            mexicoStateReceiver,
            packageLenght,
            packageWidth,
            packageHeight,
            packageWeight,
            packageDescription
        });
        
        res.status(200).json({sucess: true, guide})
      } catch (error) {
        next(error);
  }
}

