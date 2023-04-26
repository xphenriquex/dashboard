import { Component } from '@angular/core';
import { ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-sales-traffic-chart',
  templateUrl: './sales-traffic-chart.component.html',
  styleUrls: ['./sales-traffic-chart.component.scss']
})
export class SalesTrafficChartComponent {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: any = [ { data: [ 300, 500, 100 ] } ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }
}
