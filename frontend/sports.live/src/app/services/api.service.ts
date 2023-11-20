import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private api_URL = 'http://localhost:8087';

  constructor(private _http : HttpClient) {
    
   }

  getAllMatches(){
    return this._http.get(`${this.api_URL}/match`)
  }

  getLiveMatches(){
    return this._http.get(`${this.api_URL}/match/live`)
  }

  getPointTable(){
    return this._http.get(`${this.api_URL}/match/pointtable`)
  }

}
