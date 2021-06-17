const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema({
    currentUser: {
      type: String,
      required: [true, "Please provide a username"]
    },
    guideCost: {
      type: String,
      required: [true, "No guide cost given"],
    },
    guideStatus: {
        type: String,
        required: [true, "No guide cost given"],
      },
    fullNameSender: {
      type: String,
      required: [true, "Please add a name for the sender"],
      minlenght: 5,
      select: false,
    },
    emailSender: {
        type: String,
        required: [true, "Please add a senders email"],
        minlenght: 5,
        select: false,
      },
    phoneNumberSender: {
        type: String,
        required: [true, "Please add a senders phone number"],
        minlenght: 5,
        select: false,
     },
     streetAndNumberSender: {
        type: String,
        required: [true, "Please add a street and number sender"],
        minlenght: 5,
        select: false,
     },
     referenciasSender: {
        type: String,
        required: [true, "Please add referencias sender"],
        minlenght: 5,
        select: false,
     },
     colonySender: {
        type: String,
        required: [true, "Please add a colony sender"],
        minlenght: 5,
        select: false,
     },
     postalCodeSender: {
        type: String,
        required: [true, "Please add a postal code sender"],
        minlenght: 5,
        select: false,
     },
     citySender: {
        type: String,
        required: [true, "Please add a sender city"],
        minlenght: 5,
        select: false,
     },
     fullNameReceiver: {
        type: String,
        required: [true, "Please add a fullNameReceiver"],
        minlenght: 5,
        select: false,
     },
     emailReceiver: {
        type: String,
        required: [true, "Please add a emailReceiver"],
        minlenght: 5,
        select: false,
     },
     phoneNumberReceiver: {
        type: String,
        required: [true, "Please add a senders phone number"],
        minlenght: 5,
        select: false,
     },
     streetAndNumberReceiver: {
        type: String,
        required: [true, "Please add a streetAndNumberReceiver"],
        minlenght: 5,
        select: false,
     },
     colonyReceiver: {
        type: String,
        required: [true, "Please add a colonyReceiver"],
        minlenght: 5,
        select: false,
     },
     postalCodeReceiver: {
        type: String,
        required: [true, "Please add a psotalCodeReceiver"],
        minlenght: 5,
        select: false,
     },
     cityReceiver: {
        type: String,
        required: [true, "Please add a cityReceiver"],
        minlenght: 5,
        select: false,
     },
     mexicoStateReceiver: {
        type: String,
        required: [true, "Please add a mexicoStateReceiver"],
        minlenght: 5,
        select: false,
     },
     packageLenght: {
        type: String,
        required: [true, "Please add a packageLength"],
        minlenght: 5,
        select: false,
     },
     packageWidth: {
        type: String,
        required: [true, "Please add a packageWidth"],
        minlenght: 5,
        select: false,
     },
     packageHeight: {
        type: String,
        required: [true, "Please add a packageHight"],
        minlenght: 5,
        select: false,
     },
     packageWeight: {
        type: String,
        required: [true, "Please add a packageWeight"],
        minlenght: 5,
        select: false,
     },
     packageDescription: {
        type: String,
        required: [true, "Please add a packageDescription"],
        minlenght: 5,
        select: false,
     },
    
});

const Guide = mongoose.model("Guide", GuideSchema);

module.exports = Guide;

