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

  //Primero se define la ruta basica
  basePath = 'https://jobagapi.herokuapp.com/api/postulants';

  base = "https://jobagapi.herokuapp.com/api/interviews";

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
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  getInterviewByPostulantIdAndJobOfferId(postulantId: number, jobofferId: number): Observable<Interview>{
    return this.http.get<Interview>(`${this.basePath}/${postulantId}/joboffers/${jobofferId}/interviews`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getInterviewByPostulantId(postulantId:number) : Observable<Interview>{
    return this.http.get<Interview>(`${this.basePath}/${postulantId}/interviews`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllInterview() : Observable<Interview>{
    return this.http.get<Interview>(this.base)
      .pipe(retry(2), catchError(this.handleError));
  }



  addInterview(postulantId:number,jobooferId:number,item: any): Observable<Interview>{
    return this.http.post<Interview>(`${this.basePath}/${postulantId}/joboffers/${jobooferId}/interviews`, JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
    //pipe sirve para reintentar el request :D antes de mandarlo como error
  }

}
