import { col, fn } from "sequelize";
import { IMetricRepository, Metrics } from "../interfaces/metric.interface";
import Player from "../models/player";

export class MetricRepository implements IMetricRepository {

    public async getMetrics(): Promise<Metrics> {
        const metrics = await Player.findOne({
            attributes: [
                [fn("COUNT", col("id")), "players_count"],
                [fn("MAX", col("potential")), "high_potential"],
                [fn("MAX", col("overall")), "top_overall"],
                [fn("AVG", col("overall")), "overall_average"],
            ],
            raw: true
        });
        
        return {
            players_count: Number((metrics as any).players_count),
            high_potential: Number((metrics as any).high_potential ?? 0),
            top_overall: Number((metrics as any).top_overall ?? 0),
            overall_average: Number((metrics as any).overall_average ?? 0),
        };
    }
}
