import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  // selector: '.app-servers',
  // selector: '#app-servers',
  templateUrl: './servers.component.html',
  // templateUrl: '../server/server.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  theColor = 'green'
  allowIt = false
  theFn1() {
    console.log('111');
  }
  theFn12() {
    console.log('222');
  }
  theFn13() {
    console.log('333');
  }

  constructor() {
    
    setTimeout(() => {
      this.allowIt = true
    }, 2000);

    this.theFn13()

  }

  ngOnInit(): void {

  }
  
  

}
