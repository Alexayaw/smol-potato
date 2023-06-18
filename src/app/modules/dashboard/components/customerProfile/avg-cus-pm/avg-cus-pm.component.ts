import { Component } from '@angular/core';
import { ChartOptions } from '../../../../../shared/models/chart-options';

@Component({
  selector: 'app-avg-cus-pm',
  templateUrl: './avg-cus-pm.component.html',
  styleUrls: ['./avg-cus-pm.component.scss']
})
export class AvgCusPmComponent {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    const acpmData = {
      "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      "counts": [150, 178, 180, 169, 188, 200, 190, 184, 142, 155, 170, 160]
    };
    // Extracting data for chart

    this.chartOptions = {
      series: [
        {
          name: 'Average Customer Count',
          data: acpmData.counts
        }
      ],
      chart: {
        type: 'line',
        width: '100%',
        height: 200,
      },
      xaxis: {
        categories: acpmData.months
      }
  }
 }
}
