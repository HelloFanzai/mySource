import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  // @Input() theX?:string

  sonNum:string='666233888'
  
  sonAiwo(){
    this.sonNum='WOw~'

  }
  constructor() { }

  ngOnInit(): void {
  }

}
