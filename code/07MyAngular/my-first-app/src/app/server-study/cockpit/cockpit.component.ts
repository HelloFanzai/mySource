import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() theServerCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  @Output() theBluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  theA = new EventEmitter
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.theServerCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint() {
    this.theBluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }


}
