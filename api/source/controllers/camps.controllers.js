const Camps = require('../models/camp');
const errorResponse = require('../utils/responseHelpers');
const successResponse = require('../utils/responseHelpers');


export const createCamp = async (req, res) => {
    try {
        const camp = new Camps(req.body);
        await camp.save();
        return successResponse(res, 201, "Camp Registered Successfully", camp);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


export const getCampById = async (req, res) => {
    try {
        const campId = req.params.id;
        const camp = await Camps.findById(campId);
        if (!camp) {
            return errorResponse(res, 404, "Camp not found");
        }
        return successResponse(res, 200, "Camp retrieved successfully", camp);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


export const getAllCamps = async (req, res) => {
    try {
        const camps = await Camps.find();
        return successResponse(res, 200, "Camps retrieved successfully", camps);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


export const updateCamp = async (req, res) => {
    try {
        const campId = req.params.id;
        const updates = req.body;
        const camp = await Camps.findByIdAndUpdate(campId, updates, { new: true });
        if (!camp) {
            return errorResponse(res, 404, "Camp not found");
        }
        return successResponse(res, 200, "Camp updated successfully", camp);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


export const deleteCamp = async (req, res) => {
    try {
        const campId = req.params.id;
        const camp = await Camps.findByIdAndDelete(campId);
        if (!camp) {
            return errorResponse(res, 404, "Camp not found");
        }
        return successResponse(res, 200, "Camp deleted successfully", camp);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}