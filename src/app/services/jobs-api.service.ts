import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsApiService {

  constructor(private http: HttpClient) { }

  getAllJobs(): any{
    return this.http.get('')
  }
}
