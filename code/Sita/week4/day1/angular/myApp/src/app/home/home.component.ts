import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, range, from, fromEvent, Subscription, observable,Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  firstname: string = "";
  lastname: string = "";
  canNavigate: boolean = true;
  onFirstNameChange() { this.canNavigate = false; }
  onLastNameChange() { this.canNavigate = false; }
  onSave() { this.canNavigate = true; alert("saved"); }

  constructor() { 

  }
  subscription = new Subscription();
  ngOnInit() {
    // var myarray = [10, 20, 30, 40, 50];
    // var mynumbers = from(myarray);

    // var txtClick = fromEvent(document.getElementById("txt1"), "keyup");

    // this.subscription = txtClick.subscribe(
    //   (n: any) => { console.log(n, 'n'); },
      
    //   (error: any) => { console.log(error, 'error'); },
    //   () => { console.log("Completed"); }
    // )


    let myObservable = new Observable( (observable:Observer<String>)=>{
      setTimeout(() => {
        observable.next( '1st' )
      }, 1500);
      setTimeout(() => {
        observable.next( '2nd' )
      }, 2000);
      setTimeout(() => {
        observable.next( '3th' )
      }, 3000);
      setTimeout(() => {
        observable.error( 'XXX' )
      }, 4000);
      
    })
    this.subscription=myObservable.subscribe(
      (n)=>{
        console.log(n,'n');
        
      },(error)=>{
        console.log(error,'error');
        
      },()=>{
        console.log('done');
        
      }
    )

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}