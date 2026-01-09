import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import {
  Chart,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  Tooltip
} from 'chart.js';

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

@Component({
  selector: 'radar-chart',
  imports: [],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.css'
})
export class RadarChartComponent implements AfterViewInit, OnDestroy {

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  @Input({ required: true }) labels!: string[];
  @Input({ required: true }) data!: number[];
  @Input() label = 'Stats';

  private chart?: Chart;

  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'radar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            data: this.data,
            fill: true,
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgb(59, 130, 246)',
            pointBackgroundColor: 'rgb(59, 130, 246)',
          },
        ],
      },
      options: {
        backgroundColor: "FFEAE8",
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          r: {
            ticks: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      },
    });
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }

}
