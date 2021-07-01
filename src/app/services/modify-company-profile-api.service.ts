import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Profile} from "../models/Profile";
import {Company} from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class ModifyCompanyProfileApiService {

  constructor(private http: HttpClient) { }

  private url: string = "https://jobagapi.herokuapp.com/api/employeers"

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

  getCompaniesById(companyId: number) {
    return this.http.get(`${this.url}/${companyId}/companys`)
      .pipe(retry(2), catchError(this.handleError));
  }


  updateCompany(companyid: number , employeerid:number, item: Company): Observable<Company> {
    return this.http.put<Company>(`${this.url}/${employeerid}/profiles/${companyid}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}


