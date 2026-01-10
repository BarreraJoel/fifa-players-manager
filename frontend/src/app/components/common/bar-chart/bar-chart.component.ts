import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

@Component({
  selector: 'bar-chart',
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements AfterViewInit, OnDestroy {

  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  @Input() labels!: string[];
  @Input() data!: number[];
  @Input() label = 'Posiciones';

  private chart?: Chart;

  ngAfterViewInit(): void {
    new Chart(this.canvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            data: this.data,
            backgroundColor: this.generateColors(this.data.length),
            borderRadius: 6,
            borderSkipped: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { precision: 0 }
          }
        }
      }
    });
  }

  private generateColors(length: number): string[] {
    const palette = [
      '#2563eb',
      '#16a34a',
      '#f59e0b',
      '#dc2626',
      '#7c3aed',
      '#0d9488',
      '#ea580c',
      '#0891b2'
    ];

    return Array.from({ length }, (_, i) =>
      palette[i % palette.length]
    );
  }
  
  ngOnDestroy() {
    this.chart?.destroy();
  }
}
