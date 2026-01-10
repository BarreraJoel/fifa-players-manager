import { PlayerService } from '@/services/player/player.service';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { Component, inject } from '@angular/core';
import { ZardButtonComponent } from "@/shared/components/button/button.component";
import { ZardIconComponent } from "@/shared/components/icon/icon.component";
import { BarChartComponent } from '@/components/common/bar-chart/bar-chart.component';
import { PieChartComponent } from "@/components/common/pie-chart/pie-chart.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    ZardCardComponent,
    ZardButtonComponent,
    ZardIconComponent,
    BarChartComponent,
    PieChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  protected playerService: PlayerService = inject(PlayerService);
  protected playersByPositionData = {
    labels: [
      "POR",
      "CAI",
      "LI",
      "DFC",
      "LD",
      "CAD",
      "MCD",
      "MC",
      "MI",
      "MCO",
      "MD",
      "EI",
      "ED",
      "SD",
      "DC",
    ],
    data: [8, 32, 45, 21,0,5,21,10,0,20,23]
  };

  constructor() { }

  ngOnInit() {
    this.playerService.loadPlayers();
  }



}