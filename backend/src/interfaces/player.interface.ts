import Player from "../models/player";
import { IPaginatableRepository } from "./paginate.interface";

export interface IPlayerRepository extends IPaginatableRepository<Player> {}