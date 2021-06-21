import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {ModifyProfessionalProfile} from "../models/modify-professional-profile";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ModifyProfessionalProfileApiService {
  basePath = 'http://localhost:3000/professional_profile'
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

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

  getProfessionalProfileById(id: number): Observable<ModifyProfessionalProfile>{
    return this.http.get<ModifyProfessionalProfile>(`${this.basePath}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllProfessionalProfile():Observable<ModifyProfessionalProfile>{
    return this.http.get<ModifyProfessionalProfile>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }
}
