const Donors = require('../models/donor');
const { errorResponse, successResponse } = require('../utils/responseHelpers');


const createDonor = async (req, res) => {
    try {
        const donor = new Donors(req.body);
        await donor.save();
        return successResponse(res, 201, "Donor registered successfully", { donorId: donor._id, email: donor.email });
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


const getAllDonors = async (req, res) => {
    try {
        const donors = await Donors.find();
        return successResponse(res, 200, "Donors retrieved successfully", donors);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}



const getDonorById = async (req, res) => {
    try {
        const donor = await Donors.findById(req.params.id);
        if (!donor) {
            return errorResponse(res, 404, "Donor not found");
        }
        return successResponse(res, 200, "Donor retrieved successfully", donor);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


const updateDonor = async (req, res) => {
    try {
        const donor = await Donors.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!donor) {
            return errorResponse(res, 404, "Donor not found");
        }
        return successResponse(res, 200, "Donor updated successfully", donor);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}



const deleteDonor = async (req, res) => {
    try {
        const donor = await Donors.findByIdAndDelete(req.params.id);
        if (!donor) {
            return errorResponse(res, 404, "Donor not found");
        }
        return successResponse(res, 200, "Donor deleted successfully", donor);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}

module.exports = { createDonor, getAllDonors, getDonorById, updateDonor, deleteDonor };