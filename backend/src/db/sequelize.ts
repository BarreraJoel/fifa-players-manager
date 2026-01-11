import { Sequelize } from "sequelize";
import { sequelizeConfig } from "../config/database.config";

export const sequelize: Sequelize = new Sequelize(sequelizeConfig);