import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:5000/Login";

  constructor(private httpClient: HttpClient) { }

  login(login: string, password: string): Promise<number> {
    console.log("login SERVICE!!");
    return this.httpClient.post<number>(this.url, {
      login,
      password
    }, httpOptions).toPromise();
  }
}
