import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  theUserName='theUse1'
  theChangeBtn=1

  constructor() { }

  ngOnInit(): void {
  }

  theRest1(){
    console.log(this);
    this.theUserName=''
  }
  theRest2(e){
    console.log(e);
    // this.theUserName=''
  }
  theTaggle(){
    this.theChangeBtn==1?this.theChangeBtn=2:this.theChangeBtn=1
  }
}
