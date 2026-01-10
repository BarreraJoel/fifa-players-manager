import { Request, Response } from "express";
import { MetricService } from "../services/metric.service";

export class MetricController {

  constructor(
    private metricService: MetricService
  ) { }

  public getMetrics = async (request: Request, response: Response) => {
    try {
      const metrics = await this.metricService.getMetrics();

      return response.status(200).json({
        success: true,
        message: "Metricas obtenidas!",
        data: {
          metrics: metrics
        }
      });
    } catch (error: any) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

}