import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {User} from "../models/user";
import {Profiler} from "inspector";
import {Profile} from "../models/Profile"
import {Postulant} from "../models/postulant";
import {Languages} from "../models/languages";


@Injectable({
  providedIn: 'root'
})
export class ModifyProfessionalProfileApiService {

  constructor(private http: HttpClient) {
  }

  private url: string = "https://jobagapi.herokuapp.com/api/postulants"

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  // API Error Handling

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  getProfilesById(postulantId: number) {
    return this.http.get(`${this.url}/${postulantId}/profiles`)
      .pipe(retry(2), catchError(this.handleError));
  }


  updateProfile(postulantid: number , profileid:number, item: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.url}/${postulantid}/profiles/${profileid}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
