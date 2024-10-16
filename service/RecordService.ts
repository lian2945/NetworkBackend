import { Request, Response, NextFunction } from "express"
import Rank from "../model/RankModel";

export const RecordListService = async (size: number) => {
    const Datas = await Rank.findAll({
        order: [["id", "DESC"]],
        limit: size
    })
    return Datas.map((RankElement) => RankElement.dataValues);
}

export const RecordAddService = () => {
    
}