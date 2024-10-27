import { NextFunction, Request, Response } from "express";
import { RecordAddService, RecordListService, RecordRemoveService } from "../service/RecordService";

export const RecordAdd = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { nickname, record } = req.body;
        await RecordAddService(nickname, record);
        res.status(201).json({"nickname": nickname, "record": record});
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

export const RecordRemove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.body;
        await RecordRemoveService(id);
        res.status(200).send("Successfully Deleted");
    }
    catch(error) {
        next(error);
    }
}