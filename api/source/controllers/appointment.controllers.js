const Appointment = require('../models/appointment');
const { errorResponse, successResponse } = require('../utils/responseHelpers');

const createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment({
            ...req.body,
            userId: req.user.userId
        });
        await appointment.save();
        return successResponse(res, 201, "Appointment booked successfully", appointment);
    } catch (error) {
        console.log("Error creating appointment:", error);
        return errorResponse(res, 500, "Failed to book appointment");
    }
};

const getMyAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ userId: req.user.userId }).sort({ createdAt: -1 });
        return successResponse(res, 200, "Appointments retrieved", appointments);
    } catch (error) {
        console.log("Error fetching appointments:", error);
        return errorResponse(res, 500, "Failed to fetch appointments");
    }
};

module.exports = { createAppointment, getMyAppointments };
