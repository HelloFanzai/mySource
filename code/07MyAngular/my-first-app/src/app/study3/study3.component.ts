import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study3',
  templateUrl: './study3.component.html',
  styleUrls: ['./study3.component.css']
})
export class Study3Component implements OnInit {

  oddNUmbers:number[] = []
  evenNUmbers:number[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNUmbers.push(firedNumber)
    } else {
      this.oddNUmbers.push(firedNumber)
    }

  }

}
