import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakebackendService {
  constructor(
    private httpClient: HttpClient,
    ) { }

  public get(theData) {
    return this.httpClient.get(`http://localhost:3000/${theData}`);
  }
  public post(theData) {
    return this.httpClient.post("http://localhost:3000/items",theData);
  }
  public put(theData) {
    return this.httpClient.put(`http://localhost:3000/items/${theData.id}`,theData);
  }
  
  thePassedData: BehaviorSubject<any> = new BehaviorSubject<any>('')

}
