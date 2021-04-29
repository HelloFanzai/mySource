import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() theServerCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  @Output('bpCreated') theBluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  theA = new EventEmitter
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('newServerContent') ServerContentInput: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {

    console.log(nameInput.value);
    this.theServerCreated.emit({
      serverName: nameInput.value,
      serverContent: this.ServerContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.theBluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.ServerContentInput.nativeElement.value
    })
  }


}
