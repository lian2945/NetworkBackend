import { DataTypes, Model } from "sequelize";
import MySQLDB from "../config/MySQLDB"

class Rank extends Model {};

Rank.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nickname: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    record: {
        type: DataTypes.CHAR,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: MySQLDB.sequelize,
    modelName: "Rank"
})

export default Rank;