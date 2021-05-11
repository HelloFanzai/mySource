import { 
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, 
  Component, 
  ContentChild, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, OnDestroy, 
  OnInit, SimpleChanges, 
  ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {
  @Input('theElement') element: { type: string, name: string, content: string }
  @Input() name:string
  @ViewChild('haeading',{static:true}) header: ElementRef
  @ContentChild('contentParagraph') paragraph:ElementRef

  constructor() {
    console.log( 'constructor called' );
    
  }
  ngOnChanges(changes:SimpleChanges){
    console.log( 'OnChanges called' );
    console.log(changes);
    
    
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(this.header);
    console.log('Text content of paragraph:' + this.paragraph);
    
  }

  ngDoCheck(){
    console.log('ngdocheck called');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called ');
    console.log('!!Text content of paragraph:' + this.paragraph);

  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked called');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

}
