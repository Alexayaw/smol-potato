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
    this.chartOptions = {
      series: [
        {
          name: 'Reviews',
          data: [
            {
              x: "Positive",
              y: 500,
              fillColor: "#28E3A1",         
            },
            {
              x: "Neutral",
              y: 300,
              fillColor: "#FEB019",
              
            },
            {
              x: "Negative",
              y: 100,
              fillColor: "#FC5B5B",    
              
            }
          ]
        }
      ],
      
      chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: 300,
        width: '95%',
        toolbar: {
          show: true,
        },
        sparkline: {
          enabled: false,
        },
        
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          distributed: true, 
        },
        
      },
      dataLabels: {
        enabled: true,
        formatter: function(val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
        },
        offsetY: 0,
        style: {
          fontSize: '1.5em',
        },
        dropShadow: {
            enabled: true,
            left: 3,
            top: 2,
            opacity: 0.5
        }
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: true,
        },
      },
      tooltip: {
        enabled: true,
        theme: 'light',
        style: {
          fontSize: '35px',
        },
      },
      
      legend: {
        position: 'top',
        show: true,
        fontSize: '22px',
        showForSingleSeries: true,
        customLegendItems: ["Positive", "Neutral", "Negative"],
        markers: {
          fillColors: ["#28E3A1","#FEB019", "#FC5B5B"]
        }
      }
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
