import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  theUserName='theUse1'

  constructor() { }

  ngOnInit(): void {
  }

  theRest(){
    console.log(this);
    this.theUserName=''
    
  }
}
