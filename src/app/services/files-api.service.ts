import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Job} from "../models/job";
import {catchError, retry} from "rxjs/operators";
import {Upload} from "../models/upload";

@Injectable({
  providedIn: 'root'
})
export class FilesApiService {

  basePath = 'http://localhost:3000/uploads';
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'aplication/json'})}

  handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent){
      console.log('An error ocurred: ',error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was:  ${error.error}`);
    }
    return throwError('Something happened with request, please try again later')
  }

  constructor(private http: HttpClient) { }

  // ADD INFO OF  Upload
  addUpload(item: any): Observable<Upload> {
    return this.http.post<Upload>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }



}
