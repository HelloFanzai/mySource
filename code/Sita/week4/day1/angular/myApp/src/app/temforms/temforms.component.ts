import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temforms',
  templateUrl: './temforms.component.html',
  styleUrls: ['./temforms.component.css']
})
export class TemformsComponent implements OnInit {

  firstName:string=''
  lastName:string=''
  email:string=''
  amount:string=''
  gender:string=''
  country:string=''
  msg:string=''
  onRegisterClick(f:any){
    if (f.valid) {
      this.msg=
        'FirstName' + this.firstName + 
        '<br>Lastname'+this.lastName +
        '<br>Email'+this.email +
        '<br>Amount'+this.amount +
        '<br>Gender'+this.gender +
        '<br>Country'+this.country

    } else {
      this.msg='Invalid'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
