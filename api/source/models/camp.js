const mongoose = require("mongoose");
const validator = require("validator");


const campSchema = new mongoose.Schema({
    campowner: {
        type: String,
        required: true,
        minlength: 2
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
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    }

})


const Camp = mongoose.model('Camp', campSchema);

module.exports = Camp;