import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { customer } from './models/customers';
import { inivce } from './models/invice';
import { inviceType } from './models/inviceType';
import { products } from './models/products';
import { request } from './models/request';



@Injectable({
  providedIn: 'root'
})
export class MyserveicesService {
  private baseUrl = "http://app.eofficewebapp.com";
  //private  baseUrl ='http://localhost:12990/Admin/';
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),

   
    withCredentials: true,
  };
  constructor(private http:HttpClient) { }





 Editproduct(formData: FormData){
    console.log(formData)
    return this.http.put(this.baseUrl+ 'EditHospital',formData, {withCredentials: true}).pipe();
  }





  Getcustomer(id: number): Observable<customer> {
    return this.http.get<customer>(this.baseUrl + 'GetDoctor/' + id, this.headers).pipe();
  }


  postRequset(id: number): Observable<request> {
    return this.http.get<request>(this.baseUrl + 'GetDoctor/' + id, this.headers).pipe();
  }
  Getinvices(id: number): Observable<inivce> {
    return this.http.get<inivce>(this.baseUrl + 'GetDoctor/' + id, this.headers).pipe();
  }

  GetAllcustmers(): Observable<customer[]> {
    return this.http.get<customer[]>(this.baseUrl+ 'GetAllDoctor', this.headers).pipe();
  }

  GetAllinices(): Observable<inivce[]> {
    return this.http.get<inivce[]>(this.baseUrl+ 'GetAllDoctor', this.headers).pipe();
  }


  AddDoctor(formData: FormData){
    console.log(formData);
    return this.http.post(this.baseUrl+ 'AddDoctor',formData, {withCredentials: true}).pipe();
  }

  

  Editcustomer(formData: FormData){
    console.log(formData)
    return this.http.put(this.baseUrl+ 'EditDoctor',formData, {withCredentials: true}).pipe();
  }


  DeletAllcustomer(ids: string[]): Observable<customer[]> {
    console.log(ids)
    return this.http.post<customer[]>(this.baseUrl+ 'DeletAllDoctor', ids, this.headers).pipe();
  }

  


 
  Addproduct(formData: FormData){
    return this.http.post(this.baseUrl+ 'AddHospital',formData, {withCredentials: true}).pipe();
  }

 
  
  Getproduct(id: number): Observable<products> {
    return this.http.get<products>(this.baseUrl + 'GetHospitals/' + id, this.headers).pipe();
  }
  
  GetAllproduct(): Observable<products[]> {
    return this.http.get<products[]>(this.baseUrl+ 'GetAllHospitals', this.headers).pipe();
  }

  GetAllproducts(): Observable<products[]> {
    return this.http.get<products[]>(this.baseUrl+ 'GetAllHospitals', this.headers).pipe();
  }

  DeleteAllproducts(ids: number): Observable<products>  {
    console.log(ids)
    return this.http.delete<products>(this.baseUrl+ 'DeleteAllHospitals/'+ ids, this.headers).pipe();
  }

  Deleteproduct(ids: string[]): Observable<products[]> {
    console.log(ids)
    return this.http.post<products[]>(this.baseUrl+ 'DeleteHospitals', ids, this.headers).pipe();
  }


  





 









}


