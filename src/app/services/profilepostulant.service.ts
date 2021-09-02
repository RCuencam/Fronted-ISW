import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Postulant} from "../models/postulant";
import {catchError, retry} from "rxjs/operators";
import {ProfilePostulant} from "../models/profile-postulant";

@Injectable({
  providedIn: 'root'
})
export class ProfilepostulantService {

  //Postulants Endpoint
  basePath = ' https://jobag.herokuapp.com/api/postulants/';
  //HTTP Default Options

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'aplication/json'})}

  constructor(private http: HttpClient) {
  }

  //Api Error Handling
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error ocurred: ', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, body was:  ${error.error}`);
    }
    return throwError('Something happened with request, please try again later')
  }


  //Get Postulant by Id

  getProfileByPostulantId(id: number): Observable<ProfilePostulant> {
    return this.http.get<ProfilePostulant>(`${this.basePath}/${id}/profiles`)
      .pipe(retry(2), catchError(this.handleError));
  }


}
