import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myValue:string ='WoW~'

  theThing: string ='You are good guy'
  myClass: string ='good'

  userName:string=''
  passWord:string=''
  msg:string=''
  checkLgin(theTxt){
    console.log(this.userName);
    console.log(this.passWord);
    
    if (this.userName == 'a' && this.passWord == 'a') {
      
      this.msg='Good'
    }else{
      this.msg='bad';
      theTxt.focus()
    }
  }
  theClidkMethod(theVal:any){
    // alert(233)
    if (theVal==1) {
      // this.myClass='good'
      this.myClass='good'
    }else{
      this.myClass='notGood'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
