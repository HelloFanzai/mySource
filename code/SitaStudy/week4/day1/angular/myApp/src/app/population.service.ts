import { Injectable } from '@angular/core';
import { nextTick } from 'node:process';
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  myObservable:Observable<number>
  myObserver:Observer<number>

  constructor() { 
    this.myObservable=new Observable( (Observer:Observer<number>)=>{
      this.myObserver=Observer
    })

  }
  next(data:any){
    this.myObserver.next(data)
  }
  error(){
    this.myObserver.error('No')
  }
  complete(){
    this.myObserver.complete()
  }
}
