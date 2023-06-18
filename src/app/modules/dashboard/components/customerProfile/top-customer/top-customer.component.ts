import { Component } from '@angular/core';
import { ChartOptions } from '../../../../../shared/models/chart-options';

@Component({
  selector: 'app-top-customer',
  templateUrl: './top-customer.component.html',
  styleUrls: ['./top-customer.component.scss']
})
export class TopCustomerComponent {
  public chartOptions: Partial<ChartOptions>;
  
  constructor(){
    const customerData = [
      { name: 'Uncle Bon', sales: 2300 },
      { name: 'Miss Wong', sales: 1800 },
      { name: 'John', sales: 1500 },
      { name: 'Lee', sales: 1200 },
      { name: 'Mohamad', sales: 1100 },
      { name: 'Ew Jung', sales: 1000 },
      { name: 'Georgia', sales: 900 },
      { name: 'Customer 8', sales: 800 },
      { name: 'Customer 9', sales: 750 },
      { name: 'Customer 10', sales: 600 }
    ];

    const salesdata = customerData.map((customer) => customer.sales);
    const customername = customerData.map((customer) => customer.name);
  
    this.chartOptions = {
      series: [{
      data: salesdata
    }],
      chart: {
      type: 'bar',
      height: 250,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: customername 
    }
    };
}
}
