import { Component } from '@angular/core';
import { ChartOptions } from '../../../../../shared/models/chart-options';

@Component({
  selector: 'app-gender-donut',
  templateUrl: './gender-donut.component.html',
  styleUrls: ['./gender-donut.component.scss']
})
export class GenderDonutComponent {
  public chartOptions: Partial<ChartOptions>;
  public labels: string[];
  public series: number[];

  constructor() {
    const genderData = [
      "female",
      "male",
      "prefer not to say",
      "female",
      "male",
      "female",
      "male",
      "male",
      "prefer not to say",
      "male",
      "female",
      "prefer not to say",
      "male",
      "male",
      "female",
      "female",
      "male",
      "male",
      "female",
      "female",
      "female",
      "female",
      "male",
      "female",
      "male",
      "male",
      "male",
      "female",
      "prefer not to say",
    ];

    const genderCount: Record<string, number> = {};

    for (const gender of genderData) {
      if (!genderCount[gender]) {
        genderCount[gender] = 0;
      }
      genderCount[gender]++;
    }
    
    this.labels = Object.keys(genderCount);
    this.series = Object.values(genderCount);
  
    this.chartOptions ={
      chart: {
        type: "pie"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    };

}
