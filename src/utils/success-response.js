export function successRes(res, data, statusCode = 200) {
    return res.status(statusCode).json({  // statsCode → statusCode
        statusCode,
        message: 'Success',
        data
    });
}