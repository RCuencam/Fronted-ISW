import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Interview} from "../models/interview";
import {Postulant} from "../models/postulant";

@Injectable({
  providedIn: 'root'
})

export class InterviewApiService {
  basePath = 'http://localhost:3000/interviews';

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'aplication/json'})}

  constructor(private http: HttpClient) { }

  //Api Error Handling
  handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent){
      console.log('An error ocurred: ',error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was:  ${error.error}`);
    }
    return throwError('Something happened with request, please try again later')
  }

  getInterviewById(id: number): Observable<Interview>{
    return this.http.get<Interview>(`${this.basePath}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllInterviews(): Observable<Interview>{
    return this.http.get<Interview>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }
}
