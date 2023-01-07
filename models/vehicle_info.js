const mongoose = require('mongoose')

const vehicleSchema = mongoose.Schema({
    reg_no:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    type:String,
    image:String,
    mileage:Number,
    vehicle_name:{
        type: String,
        required: true
    },
    fuel_type:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    seat:{
        type:Number,
        required:true
    },
    mode:String
})

const Vehicle = mongoose.model('Vehicle',vehicleSchema)
module.exports = Vehicle;