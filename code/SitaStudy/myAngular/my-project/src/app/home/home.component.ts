import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  message!: string;
  constructor(@Inject(HttpClient) private http: HttpClient) { }
  onGetDataClick() {

    this.http.get("http://157.245.240.228:8080/cloudJson/cloudJson", {
      responseType: "text"
    }).subscribe(this.onAjaxSuccess, this.onAjaxError);


  }
  onAjaxSuccess = (response: any) => {
    if (this.message!='shows here') {
      this.message = 'shows here';
    } else {
      this.message = response;
    }
  }
  onAjaxError = (error: any) => { alert(error); }




}
