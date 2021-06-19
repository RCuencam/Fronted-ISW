import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import {Job} from "../models/job";
import {catchError, retry} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class JobsApiService {

  basePath = 'http://localhost:3000/jobs';
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'aplication/json'})}

  handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent){
      console.log('An error ocurred: ',error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was:  ${error.error}`);
    }
    return throwError('Something happened with request, please try again later')
  }

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<Job>{
    return this.http.get<Job>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  getJobById(id: number): Observable<Job>{
    return this.http.get<Job>(`${this.basePath}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  
}
