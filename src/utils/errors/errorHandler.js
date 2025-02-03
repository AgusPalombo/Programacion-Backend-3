import { EErrors } from "./errorDictionary.js";
import logger from "../logger.js";

export const errorHandler = (err, req, res, next) => {
  const errorType = EErrors[err.code] || EErrors.DEFAULT;
  
  logger.error({
    code: errorType.code,
    message: err.message || errorType.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined
  });

  res.status(errorType.status).json({
    status: "error",
    error: errorType.message
  });
};