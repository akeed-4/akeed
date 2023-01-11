import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../ModelFile/login.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private url="http://app.eofficewebapp.com/";
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),

    
    // withCredentials: true,
  };
  constructor(private http:HttpClient) { }
  UserLogin(log: Login): Observable<Login> {
    return this.http.post<Login>(this.url+ 'login', log, this.headers).pipe();
  }

}
