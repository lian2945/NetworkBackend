import express from "express";
import cookieParser from "cookie-parser";
import MySQLDB from "./config/MySQLDB";
import rankRouter from "./router/RankRouter";
import { errorHandler } from "./middlewares/ErrorMiddleware";
import cors from "cors";

const port = 3000;

const app = express();

MySQLDB.sequelize.authenticate()
    .then(() => {
        console.log("DB Successfully connected.");
    })
    .catch((err: Error) => {
        console.error(err);
        process.exit(1);
    });

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use("/rank", rankRouter);

app.listen(port, () => {
    console.log(`Server is opened at ${port}`)
})