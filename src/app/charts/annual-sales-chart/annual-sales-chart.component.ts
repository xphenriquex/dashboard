import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-annual-sales-chart',
  templateUrl: './annual-sales-chart.component.html',
  styleUrls: ['./annual-sales-chart.component.scss'],
})
export class AnnualSalesChartComponent {
  constructor() {}

  public lineChartData: any[] = [
    {
      data: [65, 59, 300, 81, 205, 200, 40, 8, 48, 400],
      label: 'Total Sales',
      fill: true,
      borderColor: 'green',
      tension: 0.5,
      backgroundColor: 'rgba(0,215,0,0.3)',
    },
  ];
  public lineChartLabels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
}
