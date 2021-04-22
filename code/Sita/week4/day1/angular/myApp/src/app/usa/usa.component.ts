import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopulationService } from '../population.service';



@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class USAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
