import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {

  list = [
    { title: 'Total Sales', amount: 9.465, percentage: 53.83, img: 'assets/sales.png'},
    { title: 'Average Order Value', amount: 465, percentage: -25.44, img: 'assets/recovery.png' },
    { title: 'Total Orders', amount: 243, percentage: 45.65, img: 'assets/shopping-bag.png' },
    { title: 'Returning Customers', amount: 35, percentage: -83.61, img: 'assets/customer.png' },
  ];

  constructor(private breakpointObserver: BreakpointObserver) { }

  cardLayout = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium]).pipe(
    map(({matches}) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 2 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  getMiniCards(): any[] {
    return Object.keys(this.list);
  }


}
