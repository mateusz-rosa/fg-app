import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: string = "";

  public password: string = "";

  public loginError: string = "";

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  logginIn() {
    console.log("LOGIN: " + this.login);
    console.log("PASS: " + this.password);
    this.loginService.login(this.login, this.password)
    // this.loginService.login('Fuero', 'FrontEndDeveloper!123')
      .then(response => {
        if (response == 200) {
          sessionStorage.setItem('loggedIn', 'true')
          this.router.navigateByUrl("dashboard-nav");
        } else {
          this.loginError = "Invalid login or password!";
        }
      });
  }
}