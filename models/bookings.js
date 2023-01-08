const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    email_id:{
        type: String,
        required: true
    },
    reg_no:{
        type: String,
        required: true
    },
    from_date:{
        type: String,
        required: true
    },
    to_date:{
        type: String,
        required: true
    },
    pickup:{
        type: String,
        required:true
    }
})

const Booking = mongoose.model('Booking',bookingSchema)
module.exports = Booking;