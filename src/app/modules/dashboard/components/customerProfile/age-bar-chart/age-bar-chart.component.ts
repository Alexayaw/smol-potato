import { Component } from '@angular/core';
import { ChartOptions } from '../../../../../shared/models/chart-options';

@Component({
  selector: 'app-age-bar-chart',
  templateUrl: './age-bar-chart.component.html',
  styleUrls: ['./age-bar-chart.component.scss']
})
export class AgeBarChartComponent {
  public chartOptions: Partial<ChartOptions>;

  
    constructor() {
      const ageData = [
        { age: "18-24", count: 15 },
        { age: "25-34", count: 32 },
        { age: "35-44", count: 28 },
        { age: "45-54", count: 20 },
        { age: "55+", count: 12 }
      ]
      // Extracting data for chart
      const categories = ageData.map(data => data.age);
      const counts = ageData.map(data => data.count);

      this.chartOptions = {
              chart: {
        type: "bar",
      },
      series: [
        {
          name: "Age Count",
          data: counts
        }
      ],
      xaxis: {
        categories: categories,
      },
      legend: {
        show: true
      }
      }

    }

  }


