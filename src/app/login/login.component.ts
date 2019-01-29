import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service'
import { Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login: string = "";
  password: string = "";
  loginError: string = "";

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    console.log("LOGIN: " + this.login);
    console.log("PASS: " + this.password);
    // this.loginService.login(this.login, this.password)
    this.loginService.login('Fuero', 'FrontEndDeveloper!123')
      .then(response => {
        console.log(response);
        if (response == 200) {
          //redirect to dashboard
          console.log("redirect to dashboard");
          sessionStorage.setItem('loggedIn', 'true')
          this.router.navigateByUrl("dashboard");
        } else {
          this.loginError = "wsad";
        }
      });
  }

}
