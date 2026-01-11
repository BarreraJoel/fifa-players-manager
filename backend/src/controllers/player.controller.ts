import { Request, Response } from "express";
import { PlayerService } from "../services/player.service";
import { PlayerResource } from "../resources/user/player-resource";
import { CreatePlayerDto } from "../dto/player/create-player.dto";
import { UpdatePlayerDto } from "../dto/player/update-player.dto";
import { WhereOptions } from "sequelize";
import { Op } from "sequelize";

export class PlayerController {

  constructor(
    private playerService: PlayerService
  ) { }

  public getPlayers = async (request: Request, response: Response) => {
    try {
      const {
        limit,
        after,
        before,
        long_name,
        nationality_name,
        club_name
      } = request.query;
      const parsedLimit = limit ? parseInt(limit as string, 10) : undefined;
      const where: WhereOptions = {};

      if (long_name) {
        where.long_name = {
          [Op.like]: `%${long_name}%`,
        };
      }

      if (nationality_name) {
        where.nationality_name = {
          [Op.like]: `%${nationality_name}%`,
        };
      }

      if (club_name) {
        where.club_name = {
          [Op.like]: `%${club_name}%`,
        };
      
      }
      const players = await this.playerService.getPlayers(
        parsedLimit,
        after as string ?? undefined,
        before as string ?? undefined,
        undefined,
        where
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

  public update = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const parsedPlayerId = parseInt(id);
      const dto = request.body as UpdatePlayerDto;
      dto.id = parsedPlayerId;
      const playerUpdated = await this.playerService.updatePlayer(dto);

      if (!playerUpdated)
        throw new Error("No se pudo editar el jugador");

      return response.status(200).json({
        success: true,
        message: "Jugador actualizado!",
        data: {
          player: PlayerResource.toResponse(playerUpdated)
        }
      });
    } catch (error: any) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  public getImage = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const parsedPlayerId = parseInt(id);
      const player = await this.playerService.getPlayer(parsedPlayerId);

      if (!player?.player_face_url)
        return response.status(404).send();

      const imageUrl = player.player_face_url;
      const imageResponse = await fetch(imageUrl);

      response.setHeader('Content-Type', imageResponse.headers.get('content-type')!);
      response.send(Buffer.from(await imageResponse.arrayBuffer()));
    } catch (error: any) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

}