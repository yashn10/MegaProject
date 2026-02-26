const Donor = require('../models/donor');
const Order = require('../models/ordermed');
const Appointment = require('../models/appointment');
const { errorResponse, successResponse } = require('../utils/responseHelpers');

const getStats = async (req, res) => {
    try {
        const userId = req.user.userId;
        const userEmail = req.user.email;

        // Count donations by matching the user's email in the donor collection
        const donationCount = await Donor.countDocuments({ email: userEmail });

        // Count orders by userId
        const orderCount = await Order.countDocuments({ userId: userId });

        // Count appointments by userId
        const appointmentCount = await Appointment.countDocuments({ userId: userId });

        return successResponse(res, 200, "Dashboard stats retrieved", {
            donations: donationCount,
            orders: orderCount,
            appointments: appointmentCount
        });
    } catch (error) {
        console.log("Error fetching dashboard stats:", error);
        return errorResponse(res, 500, "Failed to fetch stats");
    }
};

module.exports = { getStats };
