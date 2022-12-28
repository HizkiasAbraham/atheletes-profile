function successResponse(res, payload, statusCode = 200) {
  res.status(statusCode).json(payload);
}

function errorResponse(res, error, statusCode = 400) {
  res.status(statusCode).json(error);
}

module.exports = { successResponse, errorResponse };
