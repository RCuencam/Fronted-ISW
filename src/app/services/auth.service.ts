import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employeer } from '../models/employeer';

const AUTH_API = 'https://jobagapi.herokuapp.com/api/auth/';
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(credentials: Employeer): Observable<any> {
    console.log('credentials',credentials);

    return this.http.post(AUTH_API + 'sign-in', JSON.stringify({
      username: credentials.email,
      password: credentials.password
    }), httpOptions);
  }
  register(user : any): Observable<any> {
    return this.http.post(AUTH_API + 'sign-up', JSON.stringify({
      username: user.firstname,
      email: user.email,
      password: user.password
    }), httpOptions);
  }
}
