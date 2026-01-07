import { NextFunction, Request, Response } from "express";
import Player from "../models/player";

export const playerExists = (async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const playerId = parseInt(id);
    if (!await Player.findByPk(playerId)) {
        return res.status(404).json({
            success: false,
            message: "Recurso no encontrado",
        });
    }
    next();
});