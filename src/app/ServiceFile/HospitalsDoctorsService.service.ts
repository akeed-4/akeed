import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalsDoctorsModel } from '../ModelFile/HospitalsDoctorsModel';

@Injectable({
  providedIn: 'root'
})
export class HospitalsDoctorsServiceService {

  url="https://localhost:44377/api/IHospitalsDoctors/";
  headers={
    headers:new HttpHeaders({

      'Content-Type': 'application/json'

    })
  };


  
  constructor(private http:HttpClient) { }
// اضافة اطباء الي  مستشفي
  AddDataHospitalsDoctors(rag:HospitalsDoctorsModel):Observable<HospitalsDoctorsModel>{
    return this.http.post<HospitalsDoctorsModel>(this.url+"CreatHospitalsDoctors",rag,this.headers).pipe();  }


}
