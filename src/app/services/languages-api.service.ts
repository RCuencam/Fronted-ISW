import { Injectable } from '@angular/core';
import {Languages} from "../models/languages";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {MatChipInputEvent} from "@angular/material/chips";

@Injectable({
  providedIn: 'root'
})
export class LanguagesApiService {
  private url: string = "https://jobag.herokuapp.com/api/languages"
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

  addLanguage(item: Languages): Observable<Languages>{
    return this.http.post<Languages>(this.url, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateLanguage(id: number, item: Languages): Observable<Languages>{
    return this.http.put<Languages>(`${this.url}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getLanguagesById(id:number): Observable<Languages>{
    return this.http.get<Languages>(`${this.url}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
