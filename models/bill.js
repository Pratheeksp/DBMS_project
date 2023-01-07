const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
    email_id:{
        type: String,
        required: true
    },
    reg_no:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    payment_status:{
        type: Boolean,
        required: true
    },
    issues:{
        type:String,
    }
})

const Bill = mongoose.model('Bill',billSchema)
module.exports = Bill;