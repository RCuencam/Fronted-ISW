import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Job} from "../models/job";

@Injectable({
  providedIn: 'root'
})
export class JobNewApiService {

  constructor(private  http: HttpClient) { }

  private url: string = "https://jobag.herokuapp.com/api/employeers"

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

  getJobByEmployeerIdAndId(employeerId: number,  id:number) {
    return this.http.get(`${this.url}/${employeerId}/joboffers/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  addJobOffer(item: any, employeerId: number): Observable<Job>{
    return  this.http.post<Job>(`${this.url}/${employeerId}/joboffers`, JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
