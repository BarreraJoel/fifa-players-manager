import { CreatePlayerDto } from "../dto/player/create-player.dto";
import { UpdatePlayerDto } from "../dto/player/update-player.dto";
import { IPlayerRepository } from "../interfaces/player.interface";

export class PlayerService {

  constructor(private playerRepository: IPlayerRepository) { }

  public async getPlayers(
    limit: number | undefined,
    after?: string,
    before?: string,
    include?: any,
    where?: any
  ) {
    return this.playerRepository.findAllPaginate(limit, after, before, include, where);
  }

  public async getPlayer(id: number) {
    return this.playerRepository.getById(id);
  }

  public async createPlayer(dto: CreatePlayerDto) {
    return this.playerRepository.create(dto);
  }

  public async updatePlayer(dto: UpdatePlayerDto) {
    return this.playerRepository.update(dto);
  }
  
}
