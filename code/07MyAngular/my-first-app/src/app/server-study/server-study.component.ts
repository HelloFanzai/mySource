import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-study',
  templateUrl: './server-study.component.html',
  styleUrls: ['./server-study.component.css']
})
export class ServerStudyComponent implements OnInit {

  serverElements = [ 
    { type:'server', name:'Testserver', content:'a conten' },
    { type:'server', name:'Testserver', content:'a conten' },
    { type:'server', name:'Testserver', content:'a conten' },
  ];

  onServerAdded(theServerData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: theServerData.serverName,
      content: theServerData.serverContent,
    });
  }

  onBlueprintAdded(theBluePrintCreated:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: theBluePrintCreated.serverName,
      content: theBluePrintCreated.serverContent
    });
  }


  constructor() { }

  ngOnInit(): void {
  }

}
