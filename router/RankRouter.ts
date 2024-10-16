import express from "express";
import { RecordList, RecordAdd } from "../controller/RecordController"

const router = express.Router();

router
    .route("/")
    .get(RecordList)
    .post(RecordAdd)

export default router;