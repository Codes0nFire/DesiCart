const HandleError = require("../utils/handleError");




const errHandler=(err, req, res, next) => {
  const status = err.statusCode || 500;


  
  if (err.name === 'CastError') {
    err = new HandleError(`Invalid ${err.path}: ${err.value}`, 400);
  }
  else if (err.code === 11000) {
    const field = Object.keys(err.keyValue);
    err = new HandleError(`Duplicate value for field: ${field}`, 409);
  }
  else if (err.name === 'DocumentNotFoundError') {
    err = new HandleError('Document not found', 404);
  }
  else if (err.name === 'VersionError') {
    err = new HandleError('Document version conflict', 409);
  }
  else if (err.name === 'StrictModeError') {
    err = new HandleError('Extra field not allowed by schema', 400);
  }
  else if (err.name === 'MongoNetworkError' || err.name === 'DisconnectedError') {
    err = new HandleError('Database connection issue. Please try again later.', 503);
  }
  else if (err.name === 'TimeoutError') {
    err = new HandleError('Database request timed out.', 504);
  }
  else if (err.name === 'MongoServerError' || err.name === 'MongooseError') {
    err = new HandleError('Database server error', 500);
  }
  else {
    // Unknown errors
    err = new HandleError(err.message || 'Internal Server Error', 500);
  }



  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
}

module.exports=errHandler