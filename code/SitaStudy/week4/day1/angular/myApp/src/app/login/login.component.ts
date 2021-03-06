import { Component, Inject } from '@angular/core'; 
import { LoginStatusService } from "../login-status.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  msg: string = "";
  loginStatus: boolean;
  constructor(@Inject(LoginStatusService) private loginStatusService: LoginStatusService) {
    this.loginStatus = this.loginStatusService.isLoggedIn;
  }
  CheckLogin(txt1) {
    if (this.username == "1" && this.password == "1") {
      this.msg = "Successful login";
      this.loginStatusService.isLoggedIn = true;
      this.loginStatus = true;
    } else {
      this.msg = "Invalid login";
      this.loginStatusService.isLoggedIn = false;
      this.loginStatus = false;
      txt1.focus();
    }
  }
  Logout() {
    this.loginStatusService.isLoggedIn = false;
    this.loginStatus = false;
  }
}
