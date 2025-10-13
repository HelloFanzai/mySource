import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;
  private orders = new Map<string, any>();
  public orders$ = new BehaviorSubject<any[]>([]);


  constructor() {
    console.log('SocketService constructed');
  
    this.socket = io('http://localhost:4000');
    this.socket.on('order_event', (event) => this.handleOrder(event));
  }

  getOrderEvents(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('order_event', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }


  private handleOrder(order: any) {
    this.orders.set(order.id, order);
    this.orders$.next(Array.from(this.orders.values()));
  }


}
