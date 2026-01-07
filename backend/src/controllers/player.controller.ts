import { Request, Response } from "express";
import { PlayerService } from "../services/player.service";
import { PlayerResource } from "../resources/user/player-resource";
import { CreatePlayerDto } from "../dto/player/create-player.dto";

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

  public getPlayerById = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const parsedId = parseInt(id);
      const player = await this.playerService.getPlayer(parsedId);

      if (!player)
        throw new Error("No se pudo obtener el jugador");

      return response.status(200).json({
        success: true,
        message: "Jugador obtenido!",
        data: {
          player: PlayerResource.toResponse(player)
        }
      });
    } catch (error: any) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  public create = async (request: Request, response: Response) => {
    try {
      const dto = request.body as CreatePlayerDto;

      const player = await this.playerService.createPlayer(dto);

      if (!player)
        throw new Error("No se pudo crear el jugador");

      return response.status(201).json({
        success: true,
        message: "Jugador creado!",
        data: {
          player: PlayerResource.toResponse(player)
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