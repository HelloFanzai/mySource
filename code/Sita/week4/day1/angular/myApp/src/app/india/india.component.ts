import { Component, OnInit, Inject } from '@angular/core';
import { PopulationService } from '../population.service'


@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent{

  population: number = 1.32

  constructor(@Inject(PopulationService) private ps: PopulationService) { 

  }

  onIncreaseClick() {
    this.population++
    this.ps.next(this.population)
  }

  onErrorClick() {
    this.ps.error()
  }

  onCompleteClick() {
    this.ps.complete()
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe()
  // }

}
