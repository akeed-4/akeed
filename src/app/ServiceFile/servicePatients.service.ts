import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientsModel } from '../ModelFile/PatientsModel';

@Injectable({
  providedIn: 'root'
})
export class ServicePatientsService {
  url="https://localhost:44377/api/IPatients/";
  headers={
    headers:new HttpHeaders({

      'Content-Type': 'application/json'

    })
  };
  

  constructor(private http:HttpClient) { }
  ///ارجاع المريض بواسطة id
getPatientsBylId(idw:number):Observable<PatientsModel[]>{
  console.log(idw)

  return this.http.get<PatientsModel[]>(this.url+"GetPatients/"+idw,this.headers).pipe();  }

  
  AddPatients(model: PatientsModel): Observable<PatientsModel> {
    return this.http.post<PatientsModel>(this.url+"CreatPatients",model, this.headers).pipe();
  }
  //ارجاع رقم المستشفي
GetIdPatientByUserId(userId: string) {
  return this.http.get(this.url+'GetIdPatient/' + userId, {responseType: 'text'}).pipe();
}

}

