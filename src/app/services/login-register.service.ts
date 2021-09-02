import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private http: HttpClient) {
  }

  private url: string = "https://jobag.herokuapp.com/api/users";

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

// API Error Handling

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  getAllUsers() {
    return this.http.get(`${this.url}`).pipe(retry(2), catchError(this.handleError));
  }

  updateUser(id: number, item: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
