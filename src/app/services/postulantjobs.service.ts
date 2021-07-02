import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Postulant} from "../models/postulant";
import {Postulantjobs} from "../models/postulantjobs";

@Injectable({
  providedIn: 'root'
})
export class PostulantjobsService {

  constructor(private http: HttpClient) {}

  private url: string = "https://jobagapi.herokuapp.com/api";

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
// API Error Handling

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  getAllPostulantJobsByJobOfferId(id:number) {
    return this.http.get(`${this.url}/joboffers/${id}/postulantjobs`)
      .pipe(retry(2), catchError(this.handleError));
  }


  addPostulantJobs(postulantId:number, jobOfferId: number,item: any): Observable<Postulantjobs> {
    return this.http.post<Postulantjobs>(`${this.url}/postulants/${postulantId}/joboffers/${jobOfferId}/postulantjobs`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
    //pipe sirve para reintentar el request :D antes de mandarlo como error

  }

  getAllPostulantJobsByPostulantId(id : number){
    return this.http.get(`${this.url}/postulants/${id}/postulantjobs`)
      .pipe(retry(2), catchError(this.handleError));

  }

  getPostulantJobByOfferId(jobId: number){

    return this.http.get(`${this.url}/postulantjobs/${jobId}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  deletePostulantJob(postulantId: number, jobofferId:number){
    return this.http.delete(`${this.url}/postulants/${postulantId}/joboffers/${jobofferId}/postulantjobs`)
    .pipe(retry(2), catchError(this.handleError));
  }


  updatePostulantJob(postulantId:number, jobOfferId: number,item: any): Observable<Postulantjobs> {
    return this.http.put<Postulantjobs>(`${this.url}/postulant/${postulantId}/joboffers/${jobOfferId}/postulantjobs`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
    //pipe sirve para reintentar el request :D antes de mandarlo como error

  }
}
