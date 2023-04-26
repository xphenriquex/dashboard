import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { OrderService } from './order.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Order } from './order';
import { OrdersTableDataSource } from './orders-table-datasource';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Order>;
  dataSource!: OrdersTableDataSource;
  dataLength!: number;
  displayedColumns = ["id","date","name","status","orderTotal","paymentMode",];


  constructor(public orderService: OrderService) {
    this.dataSource = new OrdersTableDataSource(this.orderService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnInit() {
    this.orderService
      .getOrderCount()
      .subscribe({
        next: (orderCount: any) => this.dataLength = orderCount
      })
  }

}
