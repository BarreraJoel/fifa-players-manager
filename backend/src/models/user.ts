import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/sequelize";

class User extends Model {
    public id!: number;
    public full_name!: string;
    public email!: string;
    public password!: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

User.init(
    {
        full_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "users",
    }
);

export default User;