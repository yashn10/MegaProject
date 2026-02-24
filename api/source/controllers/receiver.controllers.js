const Receivers = require('../models/receiver');
const errorResponse = require('../utils/responseHelpers');
const successResponse = require('../utils/responseHelpers');


export const createReceiver = async (req, res) => {
    try {
        const receiver = new Receivers(req.body);
        await receiver.save();
        return successResponse(res, 201, "Receiver registered successfully", { receiverId: receiver._id, email: receiver.email });
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


export const getReceiverById = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const receiver = await Receivers.findById(receiverId);
        if (!receiver) {
            return errorResponse(res, 404, "Receiver not found");
        }
        return successResponse(res, 200, "Receiver retrieved successfully", receiver);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


export const getAllReceivers = async (req, res) => {
    try {
        const receivers = await Receivers.find();
        return successResponse(res, 200, "Receivers retrieved successfully", receivers);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


export const updateReceiver = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const updates = req.body;
        const receiver = await Receivers.findByIdAndUpdate(receiverId, updates, { new: true });
        if (!receiver) {
            return errorResponse(res, 404, "Receiver not found");
        }
        return successResponse(res, 200, "Receiver updated successfully", receiver);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


export const deleteReceiver = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const receiver = await Receivers.findByIdAndDelete(receiverId);
        if (!receiver) {
            return errorResponse(res, 404, "Receiver not found");
        }
        return successResponse(res, 200, "Receiver deleted successfully", receiver);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}