const Order = require('../models/ordermed');
const { errorResponse, successResponse } = require('../utils/responseHelpers');

const createOrder = async (req, res) => {
    try {
        const order = new Order({
            ...req.body,
            userId: req.user.userId
        });
        await order.save();
        return successResponse(res, 201, "Order placed successfully", order);
    } catch (error) {
        console.log("Error creating order:", error);
        return errorResponse(res, 500, "Failed to place order");
    }
};

const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.userId }).sort({ createdAt: -1 });
        return successResponse(res, 200, "Orders retrieved", orders);
    } catch (error) {
        console.log("Error fetching orders:", error);
        return errorResponse(res, 500, "Failed to fetch orders");
    }
};

module.exports = { createOrder, getMyOrders };
