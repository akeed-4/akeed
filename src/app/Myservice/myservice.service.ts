import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logregistar } from '../model/logregistar';
import { Rigestar } from '../model/registarModel.model';

import { Users } from '../model/users';
import { pationtModel } from '../model/pationtModel';
import { RsgsterHosptalModel } from '../model/RegistarHospital';
import { RegsterDoctor } from '../model/RegistarDoctors';
import { GetAllRole } from '../model/GetAllRole';
import { UsersModelView } from '../ModelFile/UsersModelView';
import { Login } from '../ModelFile/login.model';

@Injectable({
  providedIn: 'root'

})
export class MyserviceService {
  users!: Users[];
  g!: boolean;
  constructor(private http: HttpClient) { }

  //  private  baseUrl ='http://localhost:12990/Account/';
  private baseUrl = "http://app.eofficewebapp.com";


  headers = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    
    }),
    withCredentials: true
  };
  Rigstaration(_reg1: Rigestar): Observable<Rigestar> {
    console.log(_reg1.email);
    return this.http.post<Rigestar>(this.baseUrl + 'Register', _reg1, this.headers).pipe();

  }
  public GetAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl + 'GetAllData').pipe();
  }
  Login(_log: Logregistar): Observable<Logregistar> {
    console.log(_log);
    return this.http.post<Logregistar>(this.baseUrl + '/login', _log, this.headers).pipe();
  }
  LogoutUsers() {

    return this.http.get(this.baseUrl + 'Logout', { withCredentials: true }).pipe();
  }
  public GetRol(email: string) {
    return this.http.get(this.baseUrl + 'GetRoleName/' + email, { responseType: 'text' }).pipe();
  }
  //ارجاع رقم المستخدم
  GetIdUser(email: string) {
    return this.http.get(this.baseUrl + 'GetIdName/' + email, { responseType: 'text' }).pipe();
  }
  //ارجاع بيانات الاسم ورقم تلفون  المستخدم
  GetDataUser(email: string): Observable<UsersModelView[]> {
    return this.http.get<UsersModelView[]>(this.baseUrl + 'GetUserName/' + email, this.headers).pipe();
  }
  

  //
  EmailConfirm(id: string, token: string) {
    return this.http.get(this.baseUrl + 'RegistrationConfirm?ID=' + id + '&Token=' + token).pipe();
  }
  NameExist(username: string) {
    return this.http.get(this.baseUrl + 'UserExist?userName=' + username).pipe();
  }
  EmailExist(email: string) {
    return this.http.get(this.baseUrl + 'EmailExist?email=' + email).pipe();
  }
  forgetPassword(email: string) {
    return this.http.get(this.baseUrl + 'ForgetPassword/' + email).pipe();
  }
  Register(reg: Rigestar): Observable<Rigestar> {
    console.log(reg)
    return this.http.post<Rigestar>(this.baseUrl + 'Register', reg, this.headers).pipe();

  }
  RegisterHospital(reg: RsgsterHosptalModel): Observable<RsgsterHosptalModel> {
    console.log(reg)
    return this.http.post<RsgsterHosptalModel>(this.baseUrl + 'RegisterHospital', reg, this.headers).pipe();
  }
  RegisterDoctor(regDoctor: RegsterDoctor): Observable<RegsterDoctor> {
    console.log(regDoctor)
    return this.http.post<RegsterDoctor>(this.baseUrl + 'RegisterDoctor', regDoctor, this.headers).pipe();
  }
  public GetAllRoles(): Observable<GetAllRole[]> {

    return this.http.get<GetAllRole[]>(this.baseUrl + 'GetAllRoles', this.headers).pipe();

  }

  UserLogin(log: Login): Observable<Login> {

    return this.http.post<Login>(this.baseUrl + '/login', log, this.headers).pipe();
  }
}

