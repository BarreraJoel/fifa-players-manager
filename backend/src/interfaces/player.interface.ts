import { CreatePlayerDto } from "../dto/player/create-player.dto";
import Player from "../models/player";
import { IPaginatableRepository } from "./paginate.interface";

export interface IPlayerRepository extends IPaginatableRepository<Player> {
    getById(id: number): Promise<Player | null>;
    create(dto: CreatePlayerDto): Promise<Player | null>;
}