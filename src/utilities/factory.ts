import { NextFunction, Request, Response } from "express";
import { APIFeatures } from "./query-builder";
import { NotFoundError } from "../errors/not-found-errors";
import { catchAsync } from "./catch-async";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { BadRequestError } from "../errors/bad-request-error";

// to get all records
export const getAll = (Model: any) => catchAsync(async (req: Request, res: Response, next: NextFunction) => {
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
    return res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data: doc,
        },
    });
});

// to get one record
export const getOne = (Model: any, popOptions?: Record<string, any>, selectedPaths?: string) => catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    if (selectedPaths) query = query.select(selectedPaths);
    const doc = await query;

    if (!doc) {
        return next(new NotFoundError());
    }

    return res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});

// to update one record
export const updateOne = (Model: any) => catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let doc = await Model.findById(req.params.id);


    if (!doc) {
        return next(new NotFoundError());
    }

    if (
        doc.createdBy &&
        doc.createdBy.toString() !== req.currentUser?.id.toString() &&
        req.currentUser?.role !== '4286'
    )
        return next(new NotAuthorizedError());

    if (
        Object.keys(req.body).includes('approved') &&
        req.currentUser?.role !== '4286'
    ) {
        return next(new BadRequestError('You are not authorized to carry out this action'));
    }

    // populate the fields dynamically
    Object.keys(req.body).forEach(key => {
        if (key in doc) {
            doc[key] = req.body[key];
        }
    });

    await doc.save();

    return res.status(204).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
})

// to delete one record
export const deleteOne = (Model: any) =>
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const doc = await Model.findById(req.params.id);

        if (!doc) {
            return next(new NotFoundError());
        }

        if (
            doc.createdBy &&
            doc.createdBy.toString() !== req.currentUser?.id.toString() &&
            req.currentUser?.role !== '4286'
        )
            return next(new NotAuthorizedError());

        await doc.deleteOne();

        res.status(204).json({
            status: 'success',
            data: null,
        });
    });

export const createOne = (Model: any) => catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const doc = await Model.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            data: doc,
        }
    });
})