import express from "express";
import { RecordList, RecordAdd, RecordRemove } from "../controller/RecordController"

const router = express.Router();

router
    .route("/")
    .get(RecordList)
    .post(RecordAdd)
    .delete(RecordRemove)

export default router;