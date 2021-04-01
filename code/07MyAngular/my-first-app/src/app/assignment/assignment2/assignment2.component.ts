import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  theShows = false
  theLogArray = []
  theLogFn() {
    this.theShows = !this.theShows
    this.theLogArray.push(this.theLogArray.length+1)
    console.log( this.theLogArray );
    
  }
  theLogSubFn(){
    this.theLogArray.pop()
    console.log( this.theLogArray );
    
  }
  theLogSubFn2(e){
    this.theLogArray.splice(e,1)  
  }
}
