import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ChartOptions } from 'src/app/shared/models/chart-options';

@Component({
  selector: 'app-follower-growth-chart',
  templateUrl: './follower-growth-chart.component.html',
  styleUrls: ['./follower-growth-chart.component.scss']
})
export class FollowerGrowthChartComponent  implements OnInit, OnDestroy{
  public chartOptions: Partial<ChartOptions>;
  private subscription: Subscription = new Subscription();

  constructor(private themeService: ThemeService) {
    const baseColor = '#7239ea';
    const data = [2100, 3200, 3200, 2400, 2400, 1800, 1800];
    const categories = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
    ];

    this.chartOptions = {
      series: [
        {
          name: 'Follower Growth',
          data: data,
        },
      ],
      chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: 100, 
       
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'solid',
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [baseColor], // line color
      },
      xaxis: {
        categories: categories,
        labels: {
          show: false,
        },
        crosshairs: {
          position: 'front',
          stroke: {
            color: baseColor,
            width: 1,
            dashArray: 4,
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      tooltip: {
        theme: 'light',
        y: {
          formatter: function (val) {
            return val + '$';
          },
        },
      },
      colors: [baseColor], //line colors
    };
  }

  ngOnInit(): void {
    /** Chand chart theme */
    let sub = this.themeService.themeChanged.subscribe((theme) => {
      this.chartOptions.tooltip = {
        theme: theme,
      };
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
