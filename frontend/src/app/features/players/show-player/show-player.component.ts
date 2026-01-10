import { RadarChartComponent } from '@/components/common/radar-chart/radar-chart.component';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ZardDividerComponent } from '@/shared/components/divider/divider.component';
import { PreferredFootPipe } from '@/pipes/preferred-foot.pipe';
import { ZardBadgeComponent } from '@/shared/components/badge/badge.component';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '@/services/player/player.service';
import { Player } from '@/interfaces/player';
import { PositionsPipe } from '@/pipes/positions.pipe';

@Component({
  selector: 'app-show-player',
  standalone: true,
  imports: [
    RadarChartComponent,
    ZardDividerComponent,
    ZardBadgeComponent,
    PreferredFootPipe,
    PositionsPipe
  ],
  templateUrl: './show-player.component.html',
  styleUrl: './show-player.component.css'
})
export class ShowPlayerComponent implements OnInit {
  protected labels: string[] = [
    'Ritmo',
    'Disparo',
    'Pase',
    'Regate',
    'Defensa',
    'Físico',
  ];
  private playerId: number = 0;
  protected player = signal<Player | null>(null);
  protected playerService: PlayerService = inject(PlayerService);

  constructor(private actRoute: ActivatedRoute) {
    let playerId = this.actRoute.snapshot.paramMap.get('id');
    if (playerId)
      this.playerId = parseInt(playerId);
  }

  ngOnInit() {
    this.playerService.findPlayer(this.playerId).subscribe(
      response => {
        if (response.body?.data)
          this.player.set(response.body.data.player);
      },
      errorResponse => {
        this.player.set({
          id: 10,
          fifa_version: "19",
          fifa_update: "5",
          long_name: "Enzo Perez",
          player_face_url: "https://img.a.transfermarkt.technology/portrait/big/56066-1625771376.png?lm=1",
          nationality_name: "Argentina",
          club_name: "River Plate",
          age: 32,
          player_positions: "MCD",
          preferred_foot: "Left",
          overall: 72,
          potential: 74,
          pace: 72,
          shooting: 57,
          passing: 79,
          dribbling: 32,
          defending: 53,
          physic: 77
        });
        return null;
      }
    );
  }

  protected onImageError(e: Event) {
    (e.target as HTMLImageElement).src = '/assets/silhouette.png';
  }

  protected loadImage(playerId: number) {
    return this.playerService.loadPlayerImage(playerId);
  }

  protected getStats(): number[] {
    if (!this.player())
      return [];

    return [
      this.player()!.pace,
      this.player()!.shooting,
      this.player()!.passing,
      this.player()!.dribbling,
      this.player()!.defending,
      this.player()!.physic,
    ];
  }

}
