import { Component } from '@angular/core';
import { SocketService } from 'src/socket.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {

  allOrders: any[] = [];
  searchPrice = '';

  pageSize = 10;
  currentPage = 1;
  myChange = false;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.getOrderEvents().subscribe(eventBatch => {
      


      const flatBatch = eventBatch.flat();

      flatBatch.forEach((event: any) => {
        const index = this.allOrders.findIndex((o: any) => o.id === event.id);
        if (index !== -1) {
          this.allOrders[index] = event;
        } else {
          this.allOrders.push(event);
        }
      });
    }); 
  }

  get filteredOrders() {

    if (!this.searchPrice) return this.allOrders;
    
    this.currentPage = 1
    return this.allOrders.filter(order => {
      return order.price && (order.price / 100).toFixed(2).includes(this.searchPrice);
    });


  }

  get pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredOrders.slice(start, start + this.pageSize);
  }

  setPage(page: number) {
    if (page < 1) return;
    if ((page - 1) * this.pageSize >= this.filteredOrders.length) return;
    this.currentPage = page;
  }

  myClick(order: any) {
    console.log('Button clicked', this.pagedData[0].customer);
    this.pagedData[0].customer = 'test'
  }

  myChangeFn(){
    this.myChange = !this.myChange
  }

}


