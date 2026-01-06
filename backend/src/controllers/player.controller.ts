import { Request, Response } from "express";
import { PlayerService } from "../services/player.service";

export class PlayerController {

  constructor(
    private playerService: PlayerService
  ) { }

  public getPlayers = async (request: Request, response: Response) => {
    try {
      const { limit, after, before } = request.query;
      const parsedLimit = limit ? parseInt(limit as string, 10) : undefined;
      const players = await this.playerService.getPlayers(
        parsedLimit,
        after as string ?? undefined,
        before as string ?? undefined,
      );

      return response.status(200).json({
        success: true,
        message: "Jugadores obtenidos!",
        data: {
          players: players
        }
      });
    } catch (error: any) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
}