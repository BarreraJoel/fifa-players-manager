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
}
