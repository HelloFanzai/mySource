import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  msg: String = ''
  myForm: FormGroup

  constructor() {
    this.myForm = new FormGroup({
      firstname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
      lastname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[az0-9-]+)*(\.[a-z]{2,15})$")]),
      amount: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      gender: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required])
    });
  }


  onRegisterClick() {
    if (this.myForm.valid) {
      this.msg =
        "First Name: " + this.myForm.controls.firstname.value +
        "<br>Last Name: " + this.myForm.controls.lastname.value +
        "<br>Email: " + this.myForm.controls.email.value +
        "<br>Amount: " + this.myForm.controls.amount.value +
        "<br>Gender: " + this.myForm.controls.gender.value +
        "<br>Country: " + this.myForm.controls.country.value;
    } else {
      this.msg = "Invalid";
    }
  }


  ngOnInit(): void {
  }

}
