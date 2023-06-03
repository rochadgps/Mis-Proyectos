import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Punto1Service {

  constructor(
    private _http: HttpClient) { 

  }

  getBuscarIp(ip : string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '047cbff43cmsh14b9926fa56071dp13aab8jsna1cb0eaa1bf8',
        'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
      }),
    }
    const data = new HttpParams()
    .set('ip',ip);
    return this._http.post("https://community-neutrino-ip-info.p.rapidapi.com/ip-info",data,httpOptions);
  }
}
