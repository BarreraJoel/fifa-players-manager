import { ApiResponse } from "./api";
import { Player } from "./player";

export interface Metric {
  players_count: number,
  top_overall: number,
  overall_average: number,
  high_potential: number
}

export interface GetMetricsResponse extends ApiResponse<{
  metrics: Metric
}> { }

export interface GetBestPlayersResponse extends ApiResponse<{
  best_players: Player[]
}> { }