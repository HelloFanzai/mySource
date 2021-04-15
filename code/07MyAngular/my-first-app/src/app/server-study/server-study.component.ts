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



  constructor() { }

  ngOnInit(): void {
  }

}
