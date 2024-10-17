import { NextFunction, Request, Response } from "express";
import { RecordAddService, RecordListService } from "../service/RecordService";

export const RecordAdd = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { nickname, time } = req.body;
        await RecordAddService(nickname, time);
        res.status(201).json({"nickname": nickname, "time": time});
    }
    catch(error) {
        next(error);
    }
}

export const RecordList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const size = req.query.size ? parseInt(req.query.size as string, 10) : 10;
        const RecordsList = await RecordListService(size);
        res.status(200).json(RecordsList);
    }
    catch(error) {
        next(error);
    }
}