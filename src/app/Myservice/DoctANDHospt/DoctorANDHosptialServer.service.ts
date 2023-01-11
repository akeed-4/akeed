import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddDoctorModel } from 'src/app/ModelFile/DoctorModel/AddDoctorModel';
import { Doctors } from 'src/app/ModelFile/DoctorModel/Doctros';
import { AddHospitalModel } from 'src/app/ModelFile/HospitalModel/AddHospitalModel';
import { Hospitalss } from 'src/app/ModelFile/HospitalModel/Hospitalss';

@Injectable({
  providedIn: 'root'
})
export class DoctorANDHosptialServerService {
  
  private  baseUrl ='https://localhost:44377/Admin/';
  private  url ='https://localhost:44377/api/IHospitals/';

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),



    withCredentials: true,
  };
  constructor(private http:HttpClient) { }

  AddHospital(formData: FormData){
    return this.http.post(this.baseUrl+ 'AddHospital',formData, {withCredentials: true}).pipe();
  }




  GetAllHospitals(): Observable<Hospitalss[]> {
    return this.http.get<Hospitalss[]>(this.url+ 'GetAllHospitals', this.headers).pipe();
  }
  GetAllDoctors(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>(this.baseUrl+ 'GetAllDoctors', this.headers).pipe();
  }



  AddDoctor(formData: FormData){
    console.log(formData);
    return this.http.post(this.baseUrl+ 'AddDoctor',formData, {withCredentials: true}).pipe();
  }



  GetDoctor(id: number): Observable<AddDoctorModel> {
    return this.http.get<AddDoctorModel>(this.baseUrl + 'GetDoctor/' + id, this.headers).pipe();
  }



  EditDoctor(formData: FormData){
    console.log(formData)
    return this.http.put(this.baseUrl+ 'EditDoctor',formData, {withCredentials: true}).pipe();
  }



  DeletAllDoctors(ids: string[]): Observable<Doctors[]> {
    console.log(ids)
    return this.http.post<Doctors[]>(this.baseUrl+ 'DeletAllDoctor', ids, this.headers).pipe();
  }




  GetHospital(id: number): Observable<AddHospitalModel> {
    return this.http.get<AddHospitalModel>(this.url + 'GetHospitals/' + id, this.headers).pipe();
  }




EditHospital(formData: FormData){
    console.log(formData)
    return this.http.put(this.baseUrl+ 'EditHospital',formData, {withCredentials: true}).pipe();
  }




  DeleteAllHospitals(ids: number): Observable<AddHospitalModel>  {
    console.log(ids)
    return this.http.delete<AddHospitalModel>(this.baseUrl+ 'DeleteAllHospitals/'+ ids, this.headers).pipe();
  }





DeleteHospital(ids: string[]): Observable<Hospitalss[]> {
    console.log(ids)
    return this.http.post<Hospitalss[]>(this.baseUrl+ 'DeleteHospitals', ids, this.headers).pipe();
  }


}
