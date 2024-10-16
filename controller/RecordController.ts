import { NextFunction, Request, Response } from "express";
import { RecordAddService, RecordListService } from "../service/RecordService";

export const RecordAdd = async (req: Request, res: Response, next: NextFunction) => {
    
}

export const RecordList = async (req: Request, res: Response, next: NextFunction) => {
    const { size } = req.query;
    const RecordsList = await RecordListService(Number(size));
    res.status(200).json(RecordsList);
}