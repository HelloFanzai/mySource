import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface PersonalData {
  fName: string;
  lName: string;
  email: string;
  phone: number;
}


@Component({
  selector: 'app-my-component001',
  templateUrl: './my-component001.component.html',
  styleUrls: ['./my-component001.component.css']
})
export class MyComponent001Component {

  constructor(
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.test001()
  }




  test001() {

    type contactData = PersonalData;
    const fixthisP1: contactData = {
      email: "theP1email@someEmail.com",
      phone: 6166663666,
      fName: '',
      lName: ''
    }

    console.log(fixthisP1);

  }
  





}
