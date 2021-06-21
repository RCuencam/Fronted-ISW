import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import {Prueba} from "../models/prueba";

@Injectable({
  providedIn: 'root'
})

export class PruebaApiService {
  basePath = 'http://localhost:3000/api/prueba';
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

  getAllPrueba(): Observable<Prueba>{
    return this.http.get<Prueba>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPruebaById(id: number): Observable<Prueba>{
    return this.http.get<Prueba>(`${this.basePath}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }

  updatePrueba(id: number, item: Prueba): Observable<Prueba>{
    return this.http.put<Prueba>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  addPrueba(item: any): Observable<Prueba>{
    return this.http.post<Prueba>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deletePrueba(id:Number): Observable<any>{
    return this.http.delete<Prueba>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
