import { CreatePlayerDto } from "../dto/player/create-player.dto";
import { toPaginate } from "../helpers/paginate";
import { IPaginate } from "../interfaces/paginate.interface";
import { IPlayerRepository } from "../interfaces/player.interface";
import Player from "../models/player";

export class PlayerRepository implements IPlayerRepository {

    public async findAllPaginate(limit: number | undefined, after?: string, before?: string, include?: any, where?: any): Promise<IPaginate<Player> | null> {
        const result = await Player.paginate({
            limit,
            after,
            before,
            include: include,
            attributes: Player.attributes,
            where,
        });

        const paginate = toPaginate<Player>(result);
        return paginate;
    }

    public async getById(id: number): Promise<Player | null> {
        return Player.findByPk(
            id, { attributes: Player.attributes }
        );
    }

    public async create(dto: CreatePlayerDto): Promise<Player | null> {
        return Player.create({
            fifa_version: dto.fifa_version,
            fifa_update: dto.fifa_update,
            long_name: dto.long_name,
            player_face_url: dto.player_face_url,
            age: dto.age,
            player_positions: dto.player_positions,
            overall: dto.overall,
            potential: dto.potential,
            nationality_name: dto.nationality_name,
            club_name: dto.club_name,
            preferred_foot: dto.preferred_foot,
            pace: dto.pace,
            shooting: dto.shooting,
            passing: dto.passing,
            dribbling: dto.dribbling,
            defending: dto.defending,
            physic: dto.physic,
        });
    }
}
