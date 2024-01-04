import { NextFunction, Request, Response } from "express";
import { APIFeatures } from "./query-builder";
import { NotFoundError } from "../errors/not-found-errors";

export const getAll = (Model: any) => async (req: Request, res: Response, next: NextFunction) => {
    // To allow for nested GET reviews on place (hack)
    let filter = {};
    if (req.params.placeId) {
        filter = { place: req.params.placeId };
    }

    const features = new APIFeatures(Model.find(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const doc = await features.query;

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data: doc,
        },
    });
};

export const getOne = (Model: any, popOptions: Record<string, any>, selectedPaths: string) => async (req: Request, res: Response, next: NextFunction) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    if (selectedPaths) query = query.select(selectedPaths);
    const doc = await query;

    if (!doc) {
        return next(new NotFoundError());
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
};