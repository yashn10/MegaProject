const Contacts = require('../models/contact');
const errorResponse = require('../utils/responseHelpers');
const successResponse = require('../utils/responseHelpers');


export const createContact = async (req, res) => {
    try {
        const contact = new Contacts(req.body);
        await contact.save();
        return successResponse(res, 201, "Contact registered successfully", { contactId: contact._id, email: contact.email });
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}