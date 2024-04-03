const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,

    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    password:{
        type:String,
        required:true,
        maxLength:20
    }
})


module.exports = mongoose.model('Register', RegisterSchema)