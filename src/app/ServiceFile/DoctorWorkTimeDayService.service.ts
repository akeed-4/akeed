import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorWorkTimeDayModel } from '../ModelFile/DoctorWorkTimeDayModel';

@Injectable({
  providedIn: 'root'
})
export class DoctorWorkTimeDayServiceService {

  url="https://localhost:44377/api/IDoctorWorkTimeDays/";

  headers={
    headers:new HttpHeaders({

      'Content-Type': 'application/json'

    })
  };
  constructor(private http:HttpClient) { }
  getAppointmentsDoctorsDay(idw:number):Observable<DoctorWorkTimeDayModel[]>{
    console.log(idw)
    return this.http.get<DoctorWorkTimeDayModel[]>(this.url+"GetDoctorWorkTimeDaysByIdDO/"+idw,this.headers).pipe();  }


}
