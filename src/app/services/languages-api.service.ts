import { Injectable } from '@angular/core';
import {Languages} from "../models/languages";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {MatChipInputEvent} from "@angular/material/chips";
import {Language} from "../pages/modify-professional-profile/modify-professional-profile.component";

@Injectable({
  providedIn: 'root'
})
export class LanguagesApiService {
  basePath = 'http://localhost:3000/interviews';

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
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

  addLanguage(item: any): Observable<Languages>{
    return this.http.post<Languages>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateLanguage(id: number, item: Language): Observable<Languages>{
    return this.http.put<Languages>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getLanguagesById(id:number): Observable<Languages>{
    return this.http.get<Languages>(`${this.basePath}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
