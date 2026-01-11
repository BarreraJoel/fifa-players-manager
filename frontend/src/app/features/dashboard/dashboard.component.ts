import { PlayerService } from '@/services/player/player.service';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { Component, inject } from '@angular/core';
import { ZardButtonComponent } from "@/shared/components/button/button.component";
import { ZardIconComponent } from "@/shared/components/icon/icon.component";
import { MetricsService } from '@/services/metrics/metrics.service';
import { ZardSkeletonComponent } from "@/shared/components/skeleton/skeleton.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    ZardCardComponent,
    ZardButtonComponent,
    ZardIconComponent,
    ZardSkeletonComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  protected playerService: PlayerService = inject(PlayerService);
  protected metricsService: MetricsService = inject(MetricsService);
  protected playersByPositionData = {
    labels: [
      "POR",
      "CAI", "LI", "DFC", "LD", "CAD",
      "MCD", "MC",
      "MI", "MCO", "MD",
      "EI", "ED",
      "SD", "DC"
    ],
    data: [8, 32, 45, 21, 0, 5, 21, 10, 0, 20, 23]
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.metricsService.loadMetrics();
    this.metricsService.loadBestPlayers();
  }

  protected redirect(route: string) {
    this.router.navigateByUrl(route);
  }
  protected onImageError(e: Event) {
    (e.target as HTMLImageElement).src = '/assets/silhouette.png';
  }

  protected loadImage(playerId: number) {
    return this.playerService.loadPlayerImage(playerId);
  }


}