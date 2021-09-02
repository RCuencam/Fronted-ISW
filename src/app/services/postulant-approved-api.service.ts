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

  basePath = 'https://jobag.herokuapp.com/api/postulants';

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

  getPostulantApprovedByPostulantIdAndJobOfferId(postulantId: number, jobofferId: number): Observable<PostulantApproved>{
    return this.http.get<PostulantApproved>(`${this.basePath}/${postulantId}/joboffers/${jobofferId}`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
