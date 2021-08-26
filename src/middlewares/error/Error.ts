import { NextFunction, Request, Response } from "express";

export function middlewareError(error: Error, request: Request, response: Response, next: NextFunction) {
    if(error instanceof Error) {
        return response.sendStatus(400).json({
            error: error.message,
        });
    };

    return response.send(500).json({
        message: `Internal error server - ${error}`,
    });
};