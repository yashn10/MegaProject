const Camps = require('../models/camp');
const { errorResponse, successResponse } = require('../utils/responseHelpers');


const createCamp = async (req, res) => {
    try {
        const camp = new Camps(req.body);
        await camp.save();
        return successResponse(res, 201, "Camp Registered Successfully", camp);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


const getCampById = async (req, res) => {
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


const getAllCamps = async (req, res) => {
    try {
        const camps = await Camps.find();
        return successResponse(res, 200, "Camps retrieved successfully", camps);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


const updateCamp = async (req, res) => {
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


const deleteCamp = async (req, res) => {
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

module.exports = { createCamp, getCampById, getAllCamps, updateCamp, deleteCamp };