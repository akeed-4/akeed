import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorsHospitalsModelView } from '../ModelFile/DoctorsHospitalsModelView';
import { DoctorView } from '../ModelFile/DoctorView';
import { HospitalsModel } from '../ModelFile/HospitalsModel';
import { HospitalsSplicationsModel } from '../ModelFile/HospitalsSplicationsModel';
import { HospitalViewModel } from '../ModelFile/HospitalViewModel';
import { Specialties } from '../ModelFile/Specialties';

@Injectable({
  providedIn: 'root'
})
export class HospitalsServiceService {
  url="https://localhost:44377/api/IHospitals/";
  headers={
    headers:new HttpHeaders({

      'Content-Type': 'application/json'

    })
  };

  constructor(private http:HttpClient) { }
// اضافة مستشفي
  AddDataHospital(rag:HospitalsModel):Observable<HospitalsModel>{
    return this.http.post<HospitalsModel>(this.url+"CreatHospitals",rag,this.headers).pipe();  }
// ارجاع جميع المستشفيات
getAllHospital(): any{
    return this.http.get(this.url+"GetAllHospitals").pipe();
}
    //ارجاع تخصصات مستشفي معين GetHospitals getHospital
    getSplicationHospitalById(idw:number):Observable<Specialties[]>{
      console.log(idw)
      return this.http.get<Specialties[]>(this.url+"GetSpecialtiesWHospital/"+idw,this.headers).pipe();  }
// ارجاع جميع اقسام المستشفي
      getDapSplicationHospitalById(idw:number):Observable<HospitalsSplicationsModel[]>{
        console.log(idw)
        return this.http.get<HospitalsSplicationsModel[]>(this.url+"GetSpecialtiesWHospital/"+idw,this.headers).pipe();  }
        /////////////////
///// ارجاع تخصصات لمستشفي معين
      getSplicatiosByIdHospitalWDap(idw:number,id:number):Observable<HospitalsSplicationsModel[]>{
        console.log(idw)
        return this.http.get<HospitalsSplicationsModel[]>(this.url+"GetSpecialtiesWHospitalWDap/"+idw+"/"+id,this.headers).pipe();  }
//////ارجاع اطباء المستشفي بواسطة تخصص معين

getDoctorHospitalByIdSplicatios(idw:number,id:number):Observable<DoctorView[]>{
  // console.log(idw)
  return this.http.get<DoctorView[]>(this.url+"GetDoctorWHospitalSpl/"+idw+"/"+id,this.headers).pipe();  }
     ///
        getHospitalId(idw:number):Observable<HospitalsModel[]>{
        console.log(idw)
        return this.http.get<HospitalsModel[]>(this.url+"GetHospitals/"+idw,this.headers).pipe();  }
//ارجع اسم مستشفي معين
        getNameHospitalById(idw:number):Observable<HospitalViewModel[]>
        {  return this.http.get<HospitalViewModel[]>(this.url+"GetHospitalName/"+idw,this.headers).pipe();
       }
////
getDoctorsHospitalById(idw:number):Observable<DoctorsHospitalsModelView[]>{
  // console.log(idw)
  return this.http.get<DoctorsHospitalsModelView[]>(this.url+"GetDoctorsHospitalS/"+idw,this.headers).pipe();  }
//ارجاع رقم المستشفي
GetIdHospital(userId: string) {
  return this.http.get(this.url+'GetIdHospital/' + userId, {responseType: 'text'}).pipe();
}

}
