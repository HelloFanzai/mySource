import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  message: string = 'Date shows here';
  theBtnName:string ='Show Data'
  constructor(@Inject(HttpClient) private http: HttpClient) { }
  onGetDataClick() {

    this.http.get("http://157.245.240.228:8080/cloudJson/cloudJson", {
      responseType: "text"
    }).subscribe(this.onAjaxSuccess, this.onAjaxError);


  }
  onAjaxSuccess = (response: any) => {
    if (this.message != 'Date shows here') {
      this.message = 'Date shows here';
      this.theBtnName = 'Show Data'
    } else {
      this.message = response;
      this.theBtnName = 'Hide Data'
    }
  }
  onAjaxError = (error: any) => { alert(error); }

  
  

}
