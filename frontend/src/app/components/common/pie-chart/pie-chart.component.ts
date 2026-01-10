import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import {
  PieController,
  PieAnimationOptions,
  CategoryScale,
  Chart,
  PieDataPoint,
  PieControllerChartOptions,
  Legend,
  LinearScale,
  Tooltip,
  ArcElement
} from 'chart.js';


Chart.register(
  PieController,
  ArcElement,
  Tooltip,
  Legend
);

@Component({
  selector: 'pie-chart',
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {

  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  @Input() labels!: string[];
  @Input() data!: number[];
  @Input() label = 'Promedio';

  private chart?: Chart;

  ngAfterViewInit(): void {
    new Chart(this.canvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'My First Dataset',
          data: this.data,
          backgroundColor: this.generateColors(this.data.length),
          hoverOffset: 4,
          borderColor: '#ffffff',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "bottom"
          },
          title: {
            display: false
          }
        },
      }
    });
  }

  private generateColors(length: number): string[] {
    const palette = [
      '#64748b', // slate
      '#94a3b8', // slate light
      '#a1a1aa', // zinc
      '#cbd5e1', // cool gray
      '#9ca3af', // gray
      '#d1d5db'  // gray light
    ];

    return Array.from({ length }, (_, i) =>
      palette[i % palette.length]
    );
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }


}
