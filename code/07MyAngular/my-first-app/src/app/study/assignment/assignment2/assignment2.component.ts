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
  theLogArray:any = [1,2,3,4]
  theLogArrayacb:any = ['A','B','C']
  theLogArray123:any = [111,112,113]
  theInput = "let's add it"
  theLogFn() {
    this.theShows = !this.theShows
    this.theLogArray.push(this.theLogArray.length+' '+this.theInput+' ' +new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds() )
    console.log( this.theLogArray );
    this.theInput = "let's add it"
    
  }
  theDeleteFirst(){
    this.theLogArray.shift()
    console.log( this.theLogArray );
  }
  theDeleteLast(){
    this.theLogArray.pop()
    console.log( this.theLogArray );
  }
  theLogSubFn2(e){
    // console.log( e );
    this.theLogArray.splice(e,1)  
  }

  the123Fn(){
    this.theLogArray=this.theLogArray123
  }
  theABCFn(){
    this.theLogArray=this.theLogArrayacb
  }

}
