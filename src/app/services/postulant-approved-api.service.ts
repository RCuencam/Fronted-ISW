import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError, retry} from "rxjs/operators";

import {PostulantApproved} from "../models/postulant-approved";
import {Interview} from "../models/interview";

@Injectable({
  providedIn: 'root'
})

export class PostulantApprovedApiService {

  basePath = 'http://localhost:3000/postulant-approved';

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'aplication/json'})}

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent){
      console.log('An error ocurred: ',error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was:  ${error.error}`);
    }
    return throwError('Something happened with request, please try again later')
  }

  getPostulantApprovedById(id: number): Observable<PostulantApproved>{
    return this.http.get<PostulantApproved>(`${this.basePath}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
