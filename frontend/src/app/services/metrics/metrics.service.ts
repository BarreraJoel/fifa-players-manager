import { Metric } from '@/interfaces/metrics';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { MetricsApiService } from '../api/metrics/metrics-api.service';
import { Player } from '@/interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  private metrics: WritableSignal<Metric | null> = signal<Metric | null>(null);
  private bestPlayers: WritableSignal<Player[] | null> = signal<Player[] | null>(null);

  public metrics$ = this.metrics?.asReadonly();
  public bestPlayers$ = this.bestPlayers?.asReadonly();

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

  public loadBestPlayers() {
    this.api.getBestPlayers().subscribe(
      response => {
        if (response.body?.data)
          this.bestPlayers?.set(response.body.data.best_players);
      },
      errorResponse => {
        return null;
      }
    );
  }
  
}
