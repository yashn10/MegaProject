const mongoose = require("mongoose");
const validator = require("validator");


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
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
    message: {
        type: String,
        required: true
    }
})


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;