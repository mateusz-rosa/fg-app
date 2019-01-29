import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  login: string = "";
  password: string = "";

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onClick(){
    console.log("LOGIN: " + this.login);
    console.log("PASS: " + this.password);
    this.loginService.login(this.login, this.password).toPromise().then( result => {
      console.log(result);
    })
  }

}
