import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName:string="Adam";
  lastName:string='Smith';
  age:number=20
  receivenwsletters:boolean=true
  gender:string='Male'
  country:string='USA'
  address:string='http://www.google.com'

  changeData(){
    this.firstName='Woca'
    this.lastName="WOW~"
    this.age=66
    this.receivenwsletters=false
    this.gender='Famale'
    this.country='USB'
    this.address='http://www.baidu.com'
  }
  resetData(){
    this.firstName="Adam";
    this.lastName='Smith';
    this.age=20
    this.receivenwsletters=true
    this.gender='Male'
    this.country='USA'
    this.address='http://www.google.com'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
