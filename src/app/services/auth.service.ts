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
    return JSON.parse(session);
  }
  authLogin(params: any): Observable<any> {
    return this.http.post(`${environment.url}/asset/login`, params, options).pipe(map(response => {
      return response;
    }))
  }

  
  addAssetConfig(params: any): Observable<any> {
    return this.http.post(`${environment.url}/asset/addAssetConfig`, params, options).pipe(map(response => {
      return response;
    }))
  }
  getAssetConfig(params: any): Observable<any> {
    return this.http.get(`${environment.url}/asset/getAllAssetsConfig/${params.COMPANY_ID}`, options).pipe(map(response => {
      return response;
    }))
  }
  // asset connection starts
  addConnection(params: any): Observable<any> {
    return this.http.post(`${environment.url}/asset/addConnection`, params, options).pipe(map(response => {
      return response;
    }))
  }
  getAssetConn(params: any): Observable<any> {
    return this.http.get(`${environment.url}/asset/getAssetConnections`, options).pipe(map(response => {
      return response;
    }))
  }
  getAllSensors(params: any): Observable<any> {
    return this.http.get(`${environment.url}/asset/getAllSensors`, options).pipe(map(response => {
      return response;
    }))
  }

  
  addSensor(params: any): Observable<any> {
    return this.http.post(`${environment.url}/asset/addSensor`, params, options).pipe(map(response => {
      return response;
    }))
  }
  addSubSensor(params: any): Observable<any> {
    return this.http.post(`${environment.url}/asset/addSensorSubCatg`, params, options).pipe(map(response => {
      return response;
    }))
  }
  getSubSensorCatg(params: any): Observable<any> {
    return this.http.get(`${environment.url}/asset/getSubCatgSensorByID/${params.SENSOR_TYPE_ID}`, options).pipe(map(response => {
      return response;
    }))
  }
  
  // assets starts
  getAllAssets(params: any): Observable<any> {
    return this.http.get(`${environment.url}/asset/getAllAssets`, options).pipe(map(response => {
      return response;
    }))
  }
  
}
