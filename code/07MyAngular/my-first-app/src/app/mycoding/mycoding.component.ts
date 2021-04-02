import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycoding',
  templateUrl: './mycoding.component.html',
  styleUrls: ['./mycoding.component.css']
})
export class MycodingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  theContect(e){
    console.log(e);
    
  }

}
