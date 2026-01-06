import { IPlayerRepository } from "../interfaces/player.interface";
import Player from "../models/player";

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
}
