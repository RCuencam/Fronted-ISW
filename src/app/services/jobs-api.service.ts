import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import {Job} from "../models/job";
import {catchError, retry} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class JobsApiService {

  private url: string = "https://jobag.herokuapp.com/api/jobOffers"
  private jobofferEmployeersUrl : string="https://jobag.herokuapp.com/api/employeers"
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'aplication/json','Access-Control-Allow-Origin': '*'})}

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

  getAllJobs(): Observable<Job>{
    return this.http.get<Job>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  getJobById(id: number): Observable<Job>{
    return this.http.get<Job>(`${this.url}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  getAllJobsByEmployeerId(id: number) : Observable<Job>{
    return this.http.get<Job>(`${this.jobofferEmployeersUrl}/${id}/joboffers`)
    .pipe(retry(2), catchError(this.handleError));
  }

  getJobByEmployeerId(idJob : number, idEmployeer : number):Observable<Job>{
    return this.http.get<Job>(`${this.url}/${idJob}/employeers/${idEmployeer}`)
    .pipe(retry(2),catchError(this.handleError));
  }

  updateJobByEmployeerId(idJob: number, employeerId : number,data: Job):Observable<Job>{
    console.log(data);

    return this.http.put<Job>(`${this.jobofferEmployeersUrl}/${employeerId}/jobOffers/${idJob}`,data)
    .pipe(retry(2), catchError(this.handleError));
  }

}
