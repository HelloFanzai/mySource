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
  theTime = new Date()

  theFn1() {
    console.log('fn111');
  }
  theFn12() {
    console.log('fn222');
  }
  theFn13() {
    console.log('fn333');
  }


  theTaggle() {
    this.allowIt == true ? this.allowIt = false : this.allowIt = true
    console.log(this.allowIt);
  }

  constructor() {

    setTimeout(() => {
      this.allowIt = true
    }, 2000);

    setInterval(() => {
      this.theTime = new Date();
    }, 1)
  

    this.theFn13()

  }

  ngOnInit(): void {
    this.theFn1()


  }



}
