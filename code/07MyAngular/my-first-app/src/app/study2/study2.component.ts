import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study2',
  templateUrl: './study2.component.html',
  styleUrls: ['./study2.component.css']
})
export class Study2Component implements OnInit {
  loadedFeature=' '

  

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(feature:string){
    this.loadedFeature=feature
  }

}
