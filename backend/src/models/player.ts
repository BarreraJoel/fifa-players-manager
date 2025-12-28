import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/sequelize";

class Player extends Model {
    public id!: number;

    public fifa_version!: string;
    public fifa_update!: string;
    public player_face_url!: string;
    public long_name!: string;
    public player_positions!: string;

    public club_name!: string | null;
    public nationality_name!: string | null;

    public overall!: number;
    public potential!: number;

    public value_eur!: number | null;
    public wage_eur!: number | null;

    public age!: number;
    public height_cm!: number | null;
    public weight_kg!: number | null;

    public preferred_foot!: string | null;
    public weak_foot!: number | null;
    public skill_moves!: number | null;
    public international_reputation!: number | null;

    public work_rate!: string | null;
    public body_type!: string | null;

    public pace!: number | null;
    public shooting!: number | null;
    public passing!: number | null;
    public dribbling!: number | null;
    public defending!: number | null;
    public physic!: number | null;

    public attacking_crossing!: number | null;
    public attacking_finishing!: number | null;
    public attacking_heading_accuracy!: number | null;
    public attacking_short_passing!: number | null;
    public attacking_volleys!: number | null;

    public skill_dribbling!: number | null;
    public skill_curve!: number | null;
    public skill_fk_accuracy!: number | null;
    public skill_long_passing!: number | null;
    public skill_ball_control!: number | null;

    public movement_acceleration!: number | null;
    public movement_sprint_speed!: number | null;
    public movement_agility!: number | null;
    public movement_reactions!: number | null;
    public movement_balance!: number | null;

    public power_shot_power!: number | null;
    public power_jumping!: number | null;
    public power_stamina!: number | null;
    public power_strength!: number | null;
    public power_long_shots!: number | null;

    public mentality_aggression!: number | null;
    public mentality_interceptions!: number | null;
    public mentality_positioning!: number | null;
    public mentality_vision!: number | null;
    public mentality_penalties!: number | null;
    public mentality_composure!: number | null;

    public defending_marking!: number | null;
    public defending_standing_tackle!: number | null;
    public defending_sliding_tackle!: number | null;

    public goalkeeping_diving!: number | null;
    public goalkeeping_handling!: number | null;
    public goalkeeping_kicking!: number | null;
    public goalkeeping_positioning!: number | null;
    public goalkeeping_reflexes!: number | null;
    public goalkeeping_speed!: number | null;

    public player_traits!: string | null;
}

Player.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        fifa_version: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        fifa_update: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        player_face_url: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        long_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        player_positions: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        club_name: DataTypes.STRING(255),
        nationality_name: DataTypes.STRING(255),

        overall: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        potential: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        value_eur: DataTypes.INTEGER,
        wage_eur: DataTypes.INTEGER,

        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        height_cm: DataTypes.INTEGER,
        weight_kg: DataTypes.INTEGER,

        preferred_foot: DataTypes.STRING(255),
        weak_foot: DataTypes.INTEGER,
        skill_moves: DataTypes.INTEGER,
        international_reputation: DataTypes.INTEGER,

        work_rate: DataTypes.STRING(255),
        body_type: DataTypes.STRING(255),

        pace: DataTypes.INTEGER,
        shooting: DataTypes.INTEGER,
        passing: DataTypes.INTEGER,
        dribbling: DataTypes.INTEGER,
        defending: DataTypes.INTEGER,
        physic: DataTypes.INTEGER,

        attacking_crossing: DataTypes.INTEGER,
        attacking_finishing: DataTypes.INTEGER,
        attacking_heading_accuracy: DataTypes.INTEGER,
        attacking_short_passing: DataTypes.INTEGER,
        attacking_volleys: DataTypes.INTEGER,

        skill_dribbling: DataTypes.INTEGER,
        skill_curve: DataTypes.INTEGER,
        skill_fk_accuracy: DataTypes.INTEGER,
        skill_long_passing: DataTypes.INTEGER,
        skill_ball_control: DataTypes.INTEGER,

        movement_acceleration: DataTypes.INTEGER,
        movement_sprint_speed: DataTypes.INTEGER,
        movement_agility: DataTypes.INTEGER,
        movement_reactions: DataTypes.INTEGER,
        movement_balance: DataTypes.INTEGER,

        power_shot_power: DataTypes.INTEGER,
        power_jumping: DataTypes.INTEGER,
        power_stamina: DataTypes.INTEGER,
        power_strength: DataTypes.INTEGER,
        power_long_shots: DataTypes.INTEGER,

        mentality_aggression: DataTypes.INTEGER,
        mentality_interceptions: DataTypes.INTEGER,
        mentality_positioning: DataTypes.INTEGER,
        mentality_vision: DataTypes.INTEGER,
        mentality_penalties: DataTypes.INTEGER,
        mentality_composure: DataTypes.INTEGER,

        defending_marking: DataTypes.INTEGER,
        defending_standing_tackle: DataTypes.INTEGER,
        defending_sliding_tackle: DataTypes.INTEGER,

        goalkeeping_diving: DataTypes.INTEGER,
        goalkeeping_handling: DataTypes.INTEGER,
        goalkeeping_kicking: DataTypes.INTEGER,
        goalkeeping_positioning: DataTypes.INTEGER,
        goalkeeping_reflexes: DataTypes.INTEGER,
        goalkeeping_speed: DataTypes.INTEGER,

        player_traits: DataTypes.STRING(255),
    },
    {
        sequelize,
        tableName: "players",
        timestamps: false,
    }
);

export default Player;