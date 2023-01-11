
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DoctorModel } from '../ModelFile/DoctorModel';

@Injectable({
  providedIn: 'root'
})
export class DoctorsServiceService {

  constructor(private http: HttpClient) { }

  baseUrl="https://localhost:44377/api/IDoctors/";
  headers = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    }),

  };

  // GetAllDoctors(): Observable<DoctorModel[]> {
  //   return this.http.get<DoctorModel[]>(this.baseUrl+ 'GetAllDoctors', this.headers).pipe();
  // }

  AddDoctor(model: DoctorModel): Observable<DoctorModel> {
    return this.http.post<DoctorModel>(this.baseUrl+"CreatDoctors",model, this.headers).pipe();
  }
  Addcustomers(model: DoctorModel): Observable<DoctorModel> {
    return this.http.post<DoctorModel>(this.baseUrl+"CreatDoctors",model, this.headers).pipe();
  }

  // EditDoctor(model: EditDoctorModel): Observable<DoctorModel> {
  //   return this.http.put<DoctorModel>(this.baseUrl+ 'EditorDoctors',model, this.headers).pipe();
  // }
  getAllDoctor():any{
    return this.http.get(this.baseUrl+"GetAllDoctors").pipe();  }
//ارجاع الطبيب ب رقم معين
  getDoctorsById(idw:number):Observable<DoctorModel[]>{
    console.log(idw)
    return this.http.get<DoctorModel[]>(this.baseUrl+"GetDoctorsBySpecialties/"+idw,this.headers).pipe();  }

//  ارجاع كل الاطباء بواسطه التخصص
  getDoctorsByIdSpecialties(idw:number):Observable<DoctorModel[]>{
    console.log(idw)
    return this.http.get<DoctorModel[]>(this.baseUrl+"GetDoctorsBySpecialties/"+idw,this.headers).pipe();  }


}
