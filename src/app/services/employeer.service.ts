import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Employeer} from "../models/employeer";

@Injectable({
  providedIn: 'root'
})
export class EmployeerService {

  constructor(private http: HttpClient) {
  }
  private url: string = "https://jobagapi.herokuapp.com/api/employeers";

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
// API Error Handling

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('');
  }


  getEmployeerbyId(id:number) {
    return this.http.get(`${this.url}/${id}`)
      .pipe(retry(0), catchError(this.handleError));
  }

  getEmployeers() {
    return this.http.get(`${this.url}`);
  }

  addEmployeer(item: any): Observable<Employeer> {
    return this.http.post<Employeer>(this.url, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
