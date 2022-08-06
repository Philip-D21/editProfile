const mongoose = require("mongoose");

const addVehicleSchema = new mongoose.Schema({
     vehiclePlateNumber:{
        type:Number,
        required:[true,"Please input vehicle plate number"]

     },
     vehicleColor:{
        type:String,
        required:[true,"Please input vehicle color"]
     },
     vehicleType:{
         type:String,
         required:[true,"Please input vehicle type"]
     },
     BVN:{
        type:Number,
        required:[true,"Please input your BVN"]

     },
     NIN:{
        type:Number,
        required:[true,"Please input your NIN"]

     },
     driverLicenseNumber:{
         type:Number,
         required:[true,"Please input your driver license number"]
     },
     frontImageDriverLicense:
        {
        type: String,
        required:[true,"Please upload front image of driver license"],
     
     },
     backImageDriverLicense:{
        type: String,
        required:[true,"Please upload back image of driver license"],
     },
})




module.exports = mongoose.model('addVehicle',addVehicleSchema);