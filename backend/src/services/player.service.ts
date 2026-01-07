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
}
