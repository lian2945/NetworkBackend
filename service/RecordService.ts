import { Request, Response, NextFunction } from "express"
import Rank from "../model/RankModel";
import { CustomError } from "../middlewares/ErrorMiddleware";

export const RecordListService = async (size: number) => {
    const Datas = await Rank.findAll({
        order: [["record", "ASC"]],
        limit: size
    })
    return Datas.map((RankElement) => RankElement.dataValues);
}

export const RecordAddService = async (nickname: string, time: string) => {
    try {
        if(!nickname || !time) {
            throw new CustomError("Nickname or Time doesn't exist", 400)
        }
        return await Rank.create({nickname: nickname, record: time});
    }
    catch(error) {
        throw error;
    }
}