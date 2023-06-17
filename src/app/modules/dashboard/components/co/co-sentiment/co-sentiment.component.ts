import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ChartOptions } from '../../../../../shared/models/chart-options';

@Component({
  selector: '[co-sentiment-chart-card]',
  templateUrl: './co-sentiment.component.html'
})
export class CoSentimentComponent implements OnInit, OnDestroy {
  public chartOptions: Partial<ChartOptions>;
  private subscription: Subscription = new Subscription();

  constructor(private themeService: ThemeService) {
    const baseColor = '#7239ea';
    const data = [2100, 3200, 3200, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200, 3000, 3000, 3250, 3250];
    const categories = [
      '10AM',
      '10.30AM',
      '11AM',
      '11.15AM',
      '11.30AM',
      '12PM',
      '1PM',
      '2PM',
      '3PM',
      '4PM',
      '5PM',
      '6PM',
      '7PM',
      '8PM',
      '9PM',
    ];

    this.chartOptions = {
      series: [
        {
          name: 'Etherium',
          data: data,
        },
      ],
      chart: {
        fontFamily: 'inherit',
        type: 'bar', // Change chart type to 'bar'
        height: 150,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '45%', // Adjust the width of the bars
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.2,
          stops: [15, 120, 100],
        },
      },
      xaxis: {
        categories: categories,
        labels: {
          show: true, // Set show labels to true
        },
        tooltip: {
          enabled: false, // Disable tooltip for x-axis labels
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
      colors: [baseColor], // Bar color
    };
  }

  ngOnInit(): void {
    /** Change chart theme */
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