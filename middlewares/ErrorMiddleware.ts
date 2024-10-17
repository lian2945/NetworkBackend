import { Request, Response, NextFunction } from "express";

class CustomError extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

const errorHandler = (err: Error | CustomError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = (err as CustomError).statusCode || 500;
    res.status(statusCode).json({
        status: statusCode,
        success: false,
        message: err.message || "Interval Server Error"
    });
};

export { CustomError, errorHandler };