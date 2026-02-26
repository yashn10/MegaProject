const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    bloodgroup: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    preferredDate: {
        type: Date
    },
    timeSlot: {
        type: String
    },
    message: {
        type: String
    },
    doctorName: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
