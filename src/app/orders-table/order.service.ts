/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public data = [
    { id: 1, name: 'João Paulo', date: '01/10/1991', orderTotal: 10.00, status: 'delivered', paymentMode: 'Cash' },
    { id: 2, name: 'Carlos Silva', date: '01/10/1990', orderTotal: 11.20, status: 'delivered', paymentMode: 'Card' },
    { id: 3, name: 'Jessica Souza', date: '01/10/1992', orderTotal: 100, status: 'shipped', paymentMode: 'Card' },
    { id: 4, name: 'Ana Clara', date: '01/10/1982', orderTotal: 25, status: 'pending', paymentMode: 'Card' },
    { id: 5, name: 'Maria Silva', date: '01/10/2005', orderTotal: 31, status: 'shipped', paymentMode: 'Google play' },
    { id: 6, name: 'Pedro Rocha', date: '01/10/1991', orderTotal: 45, status: 'shipped', paymentMode: 'Paypal' },
    { id: 7, name: 'Danilo Vieira', date: '01/10/1969', orderTotal: 68, status: 'shipped', paymentMode: 'Card' },
    { id: 8, name: 'João Cabrito', date: '01/10/2002', orderTotal: 33, status: 'pending', paymentMode: 'Apple Store' },
    { id: 9, name: 'James Rocha', date: '01/10/2002', orderTotal: 99.93, status: 'delivered', paymentMode: 'Card' },
    { id: 10, name: 'Antônio José', date: '01/10/1998', orderTotal: 209, status: 'delivered', paymentMode: 'Card' },
    { id: 11, name: 'Ana Maria', date: '01/10/1994', orderTotal: 25.60, status: 'delivered', paymentMode: 'Store Credit' },
  ] as Order[];

  constructor() { }


  getOrders(paginator: MatPaginator, sort: MatSort): Observable<Order[]> {
    return new Observable(observe => {
      const orders = this.getPagedData(paginator,this.getSortedData(sort, [...this.data]))
      observe.next(orders);
    });
  }

  getOrderCount() {
    return new Observable((observer) => {
      observer.next(this.data.length);
    })
  }

  private getPagedData(paginator: MatPaginator, data: Order[]): Order[] {
    if (paginator) {
      const startIndex = paginator.pageIndex * paginator.pageSize;
      return data.splice(startIndex, paginator.pageSize);
    } else {
      return data;
    }
  }

  private getSortedData(sort: MatSort, data: Order[]): Order[] {
    if (!sort || !sort.active || sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = sort?.direction === 'asc';
      switch (sort?.active) {
        case 'id': return this.compare(+a.id, +b.id, isAsc);
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'date': return this.compare(a.date, b.date, isAsc);
        case 'orderTotal': return this.compare(+a.orderTotal, +b.orderTotal, isAsc);
        case 'paymentMode': return this.compare(a.paymentMode, b.paymentMode, isAsc);
        case 'status': return this.compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
  }

  private compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
