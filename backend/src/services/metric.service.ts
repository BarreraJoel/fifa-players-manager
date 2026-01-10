import { IMetricRepository } from "../interfaces/metric.interface";

export class MetricService {

  constructor(private metricRepository: IMetricRepository) { }

  public async getMetrics() {
    return this.metricRepository.getMetrics();
  }

}
