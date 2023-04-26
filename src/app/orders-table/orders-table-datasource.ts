/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { mergeMap } from 'rxjs/operators';
import { Observable, merge, of } from 'rxjs';
import { Order } from './order';
import { OrderService } from './order.service';


export class OrdersTableDataSource extends DataSource<Order> {
  data: Order[] = [];
  paginator!: MatPaginator;
  sort!: MatSort;

  constructor(private orderService: OrderService) {
    super();
  }

  connect(): Observable<Order[]> {
    const dataMutations = [
      of('Initial load'),
      this.paginator.page,
      this.sort.sortChange
    ] as any[];

    return merge(...dataMutations)
      .pipe(mergeMap(() => this.getOrders()));
  }

  getOrders() {
    return this.orderService.getOrders(this.paginator, this.sort);
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

}
