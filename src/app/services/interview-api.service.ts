import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Interview} from "../models/interview";

@Injectable({
  providedIn: 'root'
})

export class InterviewApiService {

  //Primero se define la ruta basica
  basePath = 'https://jobagapi.herokuapp.com/api/postulants';

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

  getInterviewByPostulantIdAndJobOfferId(postulantId: number, jobofferId: number): Observable<Interview>{
    return this.http.get<Interview>(`${this.basePath}/${postulantId}/joboffers/${jobofferId}/interviews`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getInterviewByPostulantId(postulantId:number) : Observable<Interview>{
    return this.http.get<Interview>(`${this.basePath}/${postulantId}/interviews`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
