import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baba',
  templateUrl: './baba.component.html',
  styleUrls: ['./baba.component.css']
})
export class BabaComponent implements OnInit {

  thePhoneNum:string='1024'

  babaAiwo(){
    console.log('223');
    
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
