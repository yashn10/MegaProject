const mongoose = require("mongoose");
const validator = require("validator");


const loginSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true,
        unique: true
    }

})


const doclogin = mongoose.model('doclogin', loginSchema);

module.exports = doclogin;