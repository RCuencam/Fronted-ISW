import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Postulant} from "../models/postulant";
import {catchError, retry} from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class PostulantsApiService {
  //Postulants Endpoint
  basePath = 'http:/localhost:3000/api/postulants';
  //HTTP Default Options

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

  // Create Student

  addPostulant(item: any): Observable<Postulant>{
    return  this.http.post<Postulant>(this.basePath, JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
    //pipe sirve para reintentar el request :D antes de mandarlo como error
  }

  //Get Postulant by Id

  getPostulantById(id: number): Observable<Postulant>{
    return this.http.get<Postulant>(`${this.basePath}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Get All Postulants

  getAllPostulants(): Observable<Postulant>{
    return this.http.get<Postulant>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Update Postulant

  updatePostulant(id: number, item: Postulant): Observable<Postulant>{
    return this.http.put<Postulant>(`${this.basePath}/${id}`,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Delete Postulant

  deletePostulant(id:number):Observable<Postulant>{
    return this.http.delete<Postulant>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }



}
