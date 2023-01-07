const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email_id:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    mobile_no:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    DL_no:{
        type: String,
        required: true
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User;