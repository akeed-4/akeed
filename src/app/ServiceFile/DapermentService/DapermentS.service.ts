import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dapertmens } from 'src/app/ModelFile/Dapertmens';
import { HospitalSplic } from 'src/app/ModelFile/HospitalSplic';
import { RegisterM } from 'src/app/ModelFile/register-m.model';
import { Specialties } from 'src/app/ModelFile/Specialties';


@Injectable({
  providedIn: 'root'
})
export class DapermentSService {
  url="https://localhost:44377/api/IDapertment/";
  urle="https://localhost:44377/api/ISpecialties/"
  headers={
    headers:new HttpHeaders({

      'Content-Type': 'application/json'

    })
  };
  constructor(private http:HttpClient) { }
//#region خاص باانشاء  قسم
  Register(rag:Dapertmens):Observable<Dapertmens>{
    return this.http.post<Dapertmens>(this.url+"CreatDapertment",rag,this.headers).pipe();  }

 updateDaperment(rag:Dapertmens,id:any):Observable<Dapertmens>{
   console.log(rag)
     return this.http.put<Dapertmens>(this.url+"UpdateDaperment/"+id,rag,this.headers).pipe();  }


// بعرض الاقسام
   getAllUser():any{
      return this.http.get(this.url+"GetAllDaperment/").pipe();  }


//#endregion GetAllSplication
getAllSplication():any{
  return this.http.get(this.urle+"GetAllSpecialties").pipe();

}
addSplicton(rag:Specialties):Observable<Specialties>{
  console.log(rag)
  return this.http.post<Specialties>(this.urle+"CreatSpecialties",rag,this.headers).pipe();  }



  addHosptialSplicton(rag:HospitalSplic):Observable<HospitalSplic>{
    console.log(rag)
    return this.http.post<HospitalSplic>(this.urle+"GeHopital",rag,this.headers).pipe();  }
// ارجاع التخصصات بواسطة  رقم القسم
 getSplictionD(idw:number):Observable<Specialties>{
    console.log(idw)
    return this.http.get<Specialties>(this.urle+"GetSpecialtiesWDapertment/"+idw,this.headers).pipe();  }

    getSplictionD2(idw:number):any{
      console.log(idw)
      return this.http.get(this.urle+"GetSpecialtiesWDapertment/"+idw,this.headers).pipe();  }

  deleteDaperment(idw:number):Observable<Dapertmens>{
      console.log(idw)
      return this.http.delete<Dapertmens>(this.url+"DeleteDaperment/"+idw,this.headers).pipe();  }


// ارجاع القسم بواسطة id
  getDaperment(idw:number):Observable<Dapertmens[]>{
        console.log(idw)
        return this.http.get<Dapertmens[]>(this.url+"GetDaperment/"+idw,this.headers).pipe();  }
        // ارجاع التخصص بواسطة id
  getSpecialtiesById(idw:number):Observable<Specialties[]>{
    console.log(idw)
    return this.http.get<Specialties[]>(this.urle+"GetSpecialties/"+idw,this.headers).pipe();  }

}
