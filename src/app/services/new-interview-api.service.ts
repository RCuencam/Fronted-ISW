import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Job} from "../models/job";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewInterviewApiService {

  constructor(private  http: HttpClient) { }

  private url_update: string = "https://jobagapi.herokuapp.com/api/postulants"

  private url_postulant_all: string = "https://jobagapi.herokuapp.com/api/postulantjobs";

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  getAllPostulantJob() {
    return this.http.get(`${this.url_postulant_all}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  addInterview(item: any, employeerId: number): Observable<Job>{
    return  this.http.post<Job>(`${this.url_update}/${employeerId}/joboffers`, JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
