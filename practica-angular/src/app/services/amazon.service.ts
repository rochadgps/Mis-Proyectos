import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(private _http: HttpClient) { }


getBuscarArt(criteria : string):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '047cbff43cmsh14b9926fa56071dp13aab8jsna1cb0eaa1bf8',
		'X-RapidAPI-Host': 'amazon-web-scraping-api.p.rapidapi.com'
    }),
  }
  return this._http.get("https://amazon-web-scraping-api.p.rapidapi.com/products/search?criteria="+criteria+"&page=1&countryCode=US&languageCode=ES",httpOptions);

}
getMostrarDescripcion(asin: string):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '047cbff43cmsh14b9926fa56071dp13aab8jsna1cb0eaa1bf8',
      'X-RapidAPI-Host': 'amazon-web-scraping-api.p.rapidapi.com'
    }),
  }
  return this._http.get("https://amazon-web-scraping-api.p.rapidapi.com/products/"+asin+"/reviews?countryCode=US&languageCode=ES",httpOptions);

}
}