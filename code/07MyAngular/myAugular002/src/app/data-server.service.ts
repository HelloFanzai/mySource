import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServerService {

  private socket: Socket;

  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:4000');
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


}
