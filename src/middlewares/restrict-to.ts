import { NotAuthorizedError } from '../errors/not-authorized-error';
import { NextFunction, Request, Response } from "express";

export const restrictTo = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // roles '4286' (admin), 'place-manager', 'user'
        if (!roles.includes(req.currentUser!.role)) {
            return next(new NotAuthorizedError());
        }

        next();
    };
}