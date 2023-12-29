import { NotAuthorizedError } from "@nantoo/tickets";
import { NextFunction, Request, Response } from "express";

export const restrictTo = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // roles '4286' (admin), 'restaurant-manager', 'user'
        if (!roles.includes(req.currentUser!.role)) {
            return next(new NotAuthorizedError);
        }

        next();
    };
}