import { AUTO_STYLE } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ChartOptions } from 'src/app/shared/models/chart-options';
@Component({
  selector: 'app-bo-avg-order-chart',
  templateUrl: './bo-avg-order-chart.component.html',
  styleUrls: ['./bo-avg-order-chart.component.scss']
})
export class BoAvgOrderChartComponent implements OnInit, OnDestroy {
  public chartOptions: Partial<ChartOptions>;
  private subscription: Subscription = new Subscription();
  constructor(private themeService: ThemeService) {
    const baseColor = '#7239ea';
    const categories = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
    ];
    const data = [100,200,308,90,106,406,906];
     this.chartOptions=
     {"chart": {
      "animations": {
          "enabled": false,
          // "easin": "swing"
      },
      "foreColor": "#333",
      "fontFamily": "Roboto",
      "height": 250,
      "id": "JYdky",
      "toolbar": {
          "show": false
      },
      "type": "bar",
      "width": "100%"
  },
  "plotOptions": {
      "bar": {
          "distributed": true,
          "borderRadius": 10
      },
      "radialBar": {
          "hollow": {
              "background": "#fff"
          },
          "dataLabels": {
              "name": {},
              "value": {},
              "total": {}
          }
      },
      "pie": {
          "donut": {
              "labels": {
                  "name": {},
                  "value": {},
                  "total": {}
              }
          }
      }
  },
  "dataLabels": {
      "enabled": false,
     
  },
  "grid": {
      "show": false,
      "padding": {
          "right": 25,
          "left": 15
      }
  },
  "legend": {
      "show": false,
      "fontSize": '14px',
      "offsetY": 0,
      "itemMargin": {
          "vertical": 0
      }
  },
  "series": [
      {
          "name": "Average Order",
          "data":data
      }
  ],
  "stroke": {
      "show": false,
      "lineCap": "round",
      "width": 0
  },
  "tooltip": {
      "shared": false,
      "intersect": true
  },
  "xaxis": {
    categories: categories,
      "labels": {
          "trim": true,
          "style": {}
      },
      "tickPlacement": "between",
      "title": {
          "style": {
              "fontWeight": 700
          }
      },
      "tooltip": {
          "enabled": false
      }
  }


}} 

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
