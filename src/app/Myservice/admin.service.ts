import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Rigestar } from '../model/registarModel.model';
import { Users } from '../model/users';
import { UserModel } from '../model/UserModel';
import { editUser } from '../model/editeUser';
import { RoleModel } from '../model/RoleModels';
import { Rolemodell } from '../model/Rolemodel';
import { edituserRoles } from '../model/edituserRoles';
import { categories } from '../model/categoriesModels';
import { DoctorModel } from '../model/DoctorModel';
import { pationtModel } from '../model/pationtModel';
import { AddHospital } from '../model/AddHospital';
import { DoctorsNAmeModel } from '../model/DoctorsNameModel';
import { AddHospitalModel } from '../model/AddHospitalModel';
import { GetDayAll } from '../model/GetDayAll';
import { DoctorsDay } from '../model/AddDaydoctors';
import { RegsterDoctor } from '../model/RegistarDoctors';
import { RsgsterHosptalModel } from '../model/RegistarHospital';
import { GetAllRole } from '../model/GetAllRole';
import { ShowAllHospital } from '../model/ShowAllHospital';
import { AddcustomerModel } from '../model/AddDoctorModel';

@Injectable({

  
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = "http://app.eofficewebapp.com";
  //private  baseUrl ='http://localhost:12990/Admin/';
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),

    
    withCredentials: true,
  };
  constructor(private http:HttpClient) { }

    public GetAllUsers():Observable<Users[]> {
      return this.http.get<Users[]>(this.baseUrl+'GetAllUsers',this.headers).pipe();

    }

    public AddnewUsrs(AddUser:UserModel):Observable<UserModel> {
      return this.http.post<UserModel>(this.baseUrl+'AddUsers',AddUser,this.headers).pipe();
    }


    Getuseres(id:string):Observable<Users>{
return this.http.get<Users>(this.baseUrl+'Getuseres/'+id,this.headers).pipe();
    }
    editUserNe(model:editUser):Observable<editUser>{
      return this.http.put<editUser>(this.baseUrl+'editorUsers',model,this.headers).pipe();

          }
          DeletUSer(ids:any){
            return this.http.post(this.baseUrl+'DeletUser',ids,this.headers).pipe();{
          }

}
GetUserRolse():Observable<RoleModel[]>{
  return this.http.get<RoleModel[]>(this.baseUrl+'GetUsersRoles',this.headers).pipe();
}
getNameHospital():Observable<AddHospital[]>{
  return this.http.get<AddHospital[]>(this.baseUrl+'GetNAmeHospital',this.headers).pipe();
}
public GetAllRoles():Observable<Rolemodell[]> {
  return this.http.get<Rolemodell[]>(this.baseUrl+'GetAllRoles',this.headers).pipe();

  
}
EditUserRole(model:edituserRoles ):Observable<edituserRoles>{
  return this.http.put<edituserRoles>(this.baseUrl+'editRoleUser', model,this.headers).pipe();
}

// public getAllcategories():Observable<AllHospital[]> {
//   return this.http.get<AllHospital[]>(this.baseUrl+'GetHospitalAndDepart',this.headers).pipe();
// }

public Rigstarhospital(AddDoctors:AddHospital):Observable<AddHospital> {
  console.log(AddDoctors);
  return this.http.post<AddHospital>(this.baseUrl+'AddHospitalDepart',AddDoctors,  this.headers).pipe();
}

public RigstarationPationt(Addpatient:pationtModel):Observable<pationtModel> {
  console.log(Addpatient);
  return this.http.post<pationtModel>(this.baseUrl+'Addpatient',Addpatient,this.headers).pipe();
}
public getDoctors():Observable<DoctorsNAmeModel[]> {
  return this.http.get<DoctorsNAmeModel[]>(this.baseUrl+'GetAllDoctor',this.headers).pipe();
}
public RigstarDoctors(AddDoctors:DoctorModel):Observable<DoctorModel> {

  return this.http.post<DoctorModel>(this.baseUrl+'AddDoctors',AddDoctors,  this.headers).pipe();
}
public RigstarationHosspital(Addpatient:AddHospitalModel):Observable<AddHospitalModel> {
  console.log(Addpatient);
  return this.http.post<AddHospitalModel>(this.baseUrl+'Addpatient',Addpatient,this.headers).pipe();
}
AddDoctorsDay(model:DoctorsDay ): Observable<DoctorsDay> {
  return this.http.post<DoctorsDay>(this.baseUrl+"AddWorkTimeDoctor",model, this.headers).pipe();
}

GetAllDays(): Observable<GetDayAll[]>{


  return this.http.get<GetDayAll[]>(this.baseUrl +'GetAllDays' ,this.headers).pipe();
}
RegisterDoctor(regDoctor:RegsterDoctor): Observable<RegsterDoctor>{
  console.log(regDoctor)
  return this.http.post<RegsterDoctor>(this.baseUrl +'RegisterDoctor',regDoctor,this.headers).pipe();
}
RegisterHospital(reg : RsgsterHosptalModel): Observable<RsgsterHosptalModel>{
  console.log(reg)
  return this.http.post<RsgsterHosptalModel>(this.baseUrl +'RegisterHospital' ,reg,this.headers).pipe();
}
public GetAllRole():Observable<GetAllRole[]> {
  return this.http.get<GetAllRole[]>(this.baseUrl+'GetAlRoles',this.headers).pipe();

  
}
public getAllHospital():Observable<ShowAllHospital[]> {
  return this.http.get<ShowAllHospital[]>(this.baseUrl+'GetAllHospitall',this.headers).pipe();



}

 EditHospital(formData: FormData){
    console.log(formData)
    return this.http.put(this.baseUrl+ 'EditHospital',formData, {withCredentials: true}).pipe();
  }



  DeleteAllHospitals(ids: number): Observable<AddHospitalModel>  {
    console.log(ids)
    return this.http.delete<AddHospitalModel>(this.baseUrl+ 'DeleteAllHospitals/'+ ids, this.headers).pipe();
  }

  GetAllDoctors(): Observable<AddcustomerModel[]> {
    return this.http.get<AddcustomerModel[]>(this.baseUrl+ 'GetAllDoctor', this.headers).pipe();
  }

  AddDoctor(formData: FormData){
    console.log(formData);
    return this.http.post(this.baseUrl+ 'AddDoctor',formData, {withCredentials: true}).pipe();
  }

  GetDoctor(id: number): Observable<AddcustomerModel> {
    return this.http.get<AddcustomerModel>(this.baseUrl + 'GetDoctor/' + id, this.headers).pipe();
  }

  EditDoctor(formData: FormData){
    console.log(formData)
    return this.http.put(this.baseUrl+ 'EditDoctor',formData, {withCredentials: true}).pipe();
  }

  DeletAllDoctors(ids: number[]) {
    console.log(ids)
    return this.http.post(this.baseUrl+ 'DeletAllDoctor', ids, this.headers).pipe();
  }
  GetHospital(id: number): Observable<AddHospitalModel> {
    return this.http.get<AddHospitalModel>(this.baseUrl + 'GetHospital/' + id, this.headers).pipe();
  }
  AddHospital(formData: FormData){
    return this.http.post(this.baseUrl+ 'AddHospital',formData, {withCredentials: true}).pipe();
  }

  GetAllHospitals(): Observable<AddHospitalModel[]> {
    return this.http.get<AddHospitalModel[]>(this.baseUrl+ 'GetAllHospitall', this.headers).pipe();
  }
}

