import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Job} from "../models/job";

@Injectable({
  providedIn: 'root'
})
export class JobNewApiService {
  basePath = 'http://localhost:3000/api/jobs';

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  updateJob(id: number, item: Job): Observable<Job>{
    return this.http.put<Job>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  addJob(item: any): Observable<Job>{
    return this.http.post<Job>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
