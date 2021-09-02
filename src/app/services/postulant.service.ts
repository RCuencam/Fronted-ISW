import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Postulant} from "../models/postulant";

@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  constructor(private http: HttpClient) {
  }

  private url: string = "https://jobag.herokuapp.com/api/postulants";

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
// API Error Handling

  handleError(error: HttpErrorResponse): Observable<never> {


    return throwError('');

  }


  getPostulantbyId(id:number) {
    return this.http.get(`${this.url}/${id}`)
      .pipe(retry(0), catchError(this.handleError));
  }

   // Create Student

  addPostulants(item: any): Observable<Postulant>{
    return  this.http.post<Postulant>(this.url, JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
    //pipe sirve para reintentar el request :D antes de mandarlo como error
  }

  //Get Postulant by Id

  getPostulantById(id: number): Observable<Postulant>{
    return this.http.get<Postulant>(`${this.url}/${id}`)
      .pipe(retry(0), catchError(this.handleError));
  }

  //Get All Postulants

  getAllPostulants(): Observable<Postulant>{
    return this.http.get<Postulant>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Update Postulant

  updatePostulant(id: number, item: Postulant): Observable<Postulant>{
    return this.http.put<Postulant>(`${this.url}/${id}`,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Delete Postulant

  deletePostulant(id:number):Observable<Postulant>{
    return this.http.delete<Postulant>(`${this.url}/${id}`,this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }




}
