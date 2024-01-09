import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';
import { AppError } from '../errors/app-error';

const handleCastErrorDB = (err: any) => {
  const message = `Invalid ${err.path}: ${err.name}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldDB = (err: any) => {
  const field = (err?.errmsg?.match(/index: (.+?) dup key/)?.[1])?.split('_')?.[0] || 'data provided';
  const value = (err?.errmsg?.match(/dup key: { (.+?) }/)?.[1])?.split('"')?.[1]?.split("\\")?.[0] || '';

  const errorMessage = `The ${field} '${value}' is already associated with another document. Please try something else`;

  return new AppError(errorMessage, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token. Please login again!', 401);

const handleExpiredJWTError = () =>
  new AppError('Your session has expired! Please log in Again.', 401);

const sendErrorDev = (error: any, response: Response) => {
  response.status(error.statusCode).json({
    status: error.status,
    error: error.message,
    message: error,
    stack: error.stack,
  });
};

const sendErrorProd = (err: any, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      error: err.message,
    });
  } else {
    console.log('Error 🤯', err);
    res.status(500).json({
      status: 'error',
      error: 'Something went very wrong!',
    });
  }
};

// Global Error Handler
export const errorHandler = (
  error: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof CustomError) {
    return res
      .status(error.statusCode)
      .json({ status: 'failed', errors: error.serializeErrors() });
  }

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(error, res);
  } else if (process.env.NODE_ENV === 'production') {
    error.message = error.message;
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleExpiredJWTError();

    sendErrorProd(error, res);
  }

  console.error(error);
  return res.status(500).send({
    status: 'failed',
    errors: [{ message: error.message }],
  });
};
