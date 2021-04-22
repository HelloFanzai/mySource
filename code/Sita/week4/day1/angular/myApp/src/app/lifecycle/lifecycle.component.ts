import { Component,Input, OnChanges, OnInit,  DoCheck, AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit,  DoCheck, AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked {

  @Input() companyName:string
  
  constructor() { 
    console.log('constructor');
  }
  
  ngOnInit(){
    console.log('ngOnInit');  
  }
  
  ngOnChanges(){
    console.log('OnChanges');
  }
  
  ngDoCheck(){
    console.log('DoCheck');
  }

  ngAfterContentInit(){
    console.log('AfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('AfterViewChecked');
  }
  
  ngOnDestroy(){
    alert('hahah')
    console.log('ngOnDestroy');
  }


}
