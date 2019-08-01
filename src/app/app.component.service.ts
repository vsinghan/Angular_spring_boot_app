import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  public _url: string = "http://10.236.246.39:8067/CheckEligible/sita";

  constructor(private http: HttpClient) { }

  checkUser():Observable<any> {
    return this.http.get(this._url);
  }
}
