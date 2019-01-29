import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:5000/Login";

  constructor(private httpClient: HttpClient) { }

  login(login: string, password: string): Observable<number> {
    console.log("login SERVICE!!");
    return this.httpClient.post<number>(this.url, {
      login,
      password
    });
  }
}
