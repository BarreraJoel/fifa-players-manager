import Player from "../models/player";

export interface Metrics {
    players_count: number,
    overall_average: number,
    top_overall: number,
    high_potential: number
}
export interface BestPlayers {
    best_players: Player[],
}

export interface IMetricRepository {
    getMetrics(): Promise<Metrics>;
    getBestPlayers(): Promise<BestPlayers>;
}