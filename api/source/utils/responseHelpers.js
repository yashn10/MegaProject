export const successResponse = (res, status, message, data) => {
    return res.status(status).json({
        success: true,
        message: message,
        data: data
    });
}


export const errorResponse = (res, status, message) => {
    return res.status(status).json({
        success: false,
        message: message
    });
}