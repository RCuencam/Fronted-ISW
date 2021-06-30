import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ModifyProfessionalProfileApiService {

  constructor(private http: HttpClient) {
  }

  private url: string = "https://jobagapi.herokuapp.com/api/users"
}
