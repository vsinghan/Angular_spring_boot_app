import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public _url1: string = "http://10.236.246.39:8067/ViewTicket/";
  public _url2: string = "http://10.236.246.39:8067/CancelTicket/";
  public _url3: string = "http://10.236.246.39:8067/CheckEligible/";
  public _url4: string = "http://10.236.246.39:8067/viewseats";
  public _url5: string = "http://10.236.246.39:8067/add";

  constructor(private http: HttpClient) { }

  getTicket(ticketId: number):Observable<any> {
    return this.http.get(this._url1 + ticketId);
  }

  removeTicket(ticketId: number):Observable<any[]> {
    return this.http.get<any[]>(this._url2 + ticketId);
  }

  checkUser(userName: string):Observable<any> {
    return this.http.get(this._url3 + userName);
  }

  viewSeats():Observable<any> {
    return this.http.get(this._url4);
  }

  addPassenger(passengers: any[]):Observable<any[]> {
    return this.http.post<any[]>(this._url5, passengers);
  }
}
