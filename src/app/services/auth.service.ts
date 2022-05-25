import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
const options = {
  headers: new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  getSessionData(){
    const session=JSON.parse(JSON.stringify(sessionStorage.getItem('session')));
    return JSON.parse(session)
  }
  authLogin(params: any): Observable<any> {
    return this.http.post(`${environment.url}/asset/login`, params, options).pipe(map(response => {
      return response;
    }))
  }

  
  addAssetConfig(params: any): Observable<any> {
    return this.http.post(`${environment.url}/asset/addAsset`, params, options).pipe(map(response => {
      return response;
    }))
  }
  getAssetConfig(params: any): Observable<any> {
    return this.http.get(`${environment.url}/asset/getAllAssets/${params.COMPANY_ID}`, options).pipe(map(response => {
      return response;
    }))
  }

  
}
