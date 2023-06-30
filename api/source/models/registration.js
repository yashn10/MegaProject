const mongoose = require("mongoose");
const validator = require("validator");


const registrationSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 3
    },
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    age: {
        type: Number,
        required: true,
        minlength: 2,
        maxlength: 3
    },
    bloodgroup: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:[true, "Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    }

})


const User = mongoose.model('User', registrationSchema);

module.exports = User;