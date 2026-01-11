import { FormControl } from "@angular/forms";
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


export interface LoginDto {
  email: string;
  password: string;
}

export interface CreatePlayerRequest {
  fifa_version: string,
  fifa_update: string,
  long_name: string,
  player_face_url: string,
  age: number,
  overall: number,
  potential: number,
  player_positions: string,
  nationality_name?: string,
  club_name?: string,
  preferred_foot?: string,
  pace?: number,
  shooting?: number,
  passing?: number,
  dribbling?: number,
  defending?: number,
  physic?: number,
}

export interface CreatePlayerResponse extends ApiResponse<{
  player: Player
}> { }

export interface EditPlayerRequest {
  fifa_version?: string,
  fifa_update?: string,
  long_name?: string,
  player_face_url?: string,
  age?: number,
  overall?: number,
  potential?: number,
  player_positions?: string,
  nationality_name?: string,
  club_name?: string,
  preferred_foot?: string,
  pace?: number,
  shooting?: number,
  passing?: number,
  dribbling?: number,
  defending?: number,
  physic?: number
}

export interface EditPlayerResponse extends ApiResponse<{
  player: Player
}> { }

export type CreateEditPlayerForm = {
  fifa_version: FormControl<string | null>,
  fifa_update: FormControl<string | null>,
  long_name: FormControl<string | null>,
  player_face_url: FormControl<string | null>,
  age: FormControl<number | null>,
  overall: FormControl<number | null>,
  potential: FormControl<number | null>,
  player_positions: FormControl<string[] | null>,

  nationality_name: FormControl<string | null>,
  club_name: FormControl<string | null>,
  preferred_foot: FormControl<string | null>,
  pace: FormControl<number | null>,
  shooting: FormControl<number | null>,
  passing: FormControl<number | null>,
  dribbling: FormControl<number | null>,
  defending: FormControl<number | null>,
  physic: FormControl<number | null>,
};
