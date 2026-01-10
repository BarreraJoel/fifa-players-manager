import { Metric } from '@/interfaces/metrics';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { MetricsApiService } from '../api/metrics/metrics.service';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  protected metrics: WritableSignal<Metric | null> = signal<Metric | null>(null);

  public metrics$ = this.metrics?.asReadonly();

  constructor(private api: MetricsApiService) { }

  public loadMetrics() {
    this.api.getMetrics().subscribe(
      response => {
        if (response.body?.data)
          this.metrics?.set(response.body.data.metrics);
      },
      errorResponse => {
        this.metrics?.set({
          players_count: 165000,
          top_overall: 95,
          overall_average: 74,
          high_potential: 89
        });
        return null;
      }
    );
  }
}
