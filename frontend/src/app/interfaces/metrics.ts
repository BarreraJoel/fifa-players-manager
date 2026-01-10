import { ApiResponse } from "./api";

export interface Metric {
  players_count: number,
  top_overall: number,
  overall_average: number,
  high_potential: number
}

export interface GetMetricsResponse extends ApiResponse<{
  metrics: Metric
}> { }