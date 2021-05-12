import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>()
  interval
  lastNUmber = 0

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){ 
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNUmber + 1)
      this.lastNUmber++
    },1000)
  }

  onPasuseGame(){
    
  }

}
