import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../ModelFile/login.model';
import { RegisterM } from '../ModelFile/register-m.model';

@Injectable({
  providedIn: 'root'
})
export class ServeRegisterService {

  url="https://localhost:44361/Account";
  headers={
    headers:new HttpHeaders({

      'Content-Type': 'application/json'

    })
  };
  constructor(private http:HttpClient) { }
//#region خاص باانشاء حساب
  Register(rag:RegisterM):Observable<RegisterM>{
    return this.http.post<RegisterM>(this.url+"/"+"Register",rag,this.headers).pipe();  }



   getAllUser():any{
      return this.http.get(this.url+"/"+"GetAllUsser");  }

//#endregion GetAllSplication


 //#region خاص بتسجيل الدخول
 login(loginer:Login):Observable<Login>{
  console.log(loginer);
 return this.http.post<Login>(this.url+"/"+'Login',loginer,this.headers).pipe();  }
 //#endregion
}
