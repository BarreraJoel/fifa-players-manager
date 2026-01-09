import { ApiResponse } from "./api";
import { Paginate } from "./paginate";

export type PreferredFoot = "Left" | "Right";

export interface Player {
  id: number,
  fifa_version: string,
  fifa_update: string,
  long_name: string,
  player_face_url: string,
  nationality_name: string,
  club_name: string,
  age: number,
  player_positions: string,
  preferred_foot: PreferredFoot,
  overall: number,
  potential: number,
  pace: number,
  shooting: number,
  passing: number,
  dribbling: number,
  defending: number,
  physic: number
}

export interface PlayersPaginate {
  players: Paginate<Player>
} { }

export interface GetPlayersPaginateResponse extends ApiResponse<PlayersPaginate> { }
export interface GetPlayerByIdResponse extends ApiResponse<{
  player: Player
}> { }