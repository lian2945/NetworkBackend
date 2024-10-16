import { Dialect, Sequelize } from "sequelize";
import * as dotenv from "dotenv";
import config from '../config/DBConfig.json';

dotenv.config();

const env = process.env.MySQL;

const DBConfig = config[env as keyof typeof config]

const sequelize = new Sequelize(DBConfig.database, DBConfig.username, DBConfig.password, {
    host: DBConfig.host,
    dialect: DBConfig.dialect as Dialect
});

const db: {sequelize: Sequelize} = {
    sequelize
};

export default db;