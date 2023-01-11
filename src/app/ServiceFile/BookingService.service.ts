import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Byte } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Booking } from '../ModelFile/booking';
import { BookingAndPatienModel } from '../ModelFile/BookingAndPatienModel';
import { BookingGetModel } from '../ModelFile/BookingGetModel';
import { BookingGetPatientModel } from '../ModelFile/BookingGetPatientModel';
import { BookingModel } from '../ModelFile/BookingModel';
import { BookingTestModel } from '../ModelFile/bookingTestModel';
import { BoookingGetByIdModel } from '../ModelFile/BoookingGetByIdModel';
import { PatientsModel } from '../ModelFile/PatientsModel';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  url="https://localhost:44377/api/IBooking/";
  headers={
    headers:new HttpHeaders({

      'Content-Type': 'application/json'

    })
  };

  constructor(private http:HttpClient) { }
  //اضافة بيانات الحجوزات الي جدولين الحجوزات
  AddBooking(model: BookingModel): Observable<BookingModel> {
    return this.http.post<BookingModel>(this.url+"CreatBooking",model, this.headers).pipe();
  }

  AddBookingAndPatins(model: BookingAndPatienModel): Observable<BookingAndPatienModel> {
    return this.http.post<BookingAndPatienModel>(this.url+"CreatBookingANdPatins",model , this.headers).pipe();
  }



  
  //اضافة بيانات الحجوزات الي جدول  الحجوزات
  AddBookingTest(model: BookingTestModel): Observable<BookingTestModel> {
    return this.http.post<BookingTestModel>(this.url+"CreatbokTest",model, this.headers).pipe();
  }
// 660447082
  // عرض بيانات حجوزات مستشفي معين
  getBookingHospitalById(id:number):Observable<BookingGetModel[]>{
    return this.http.get<BookingGetModel[]>(this.url+"GetBookingGetFirst/"+id,this.headers).pipe()
  }
  // عرض حجوازBookingGetPatientModel  المريض
  getBookingPatientById(id:number):Observable<BookingGetPatientModel[]>{
    return this.http.get<BookingGetPatientModel[]>(this.url+"GetBookingGetPatient/"+id,this.headers).pipe()
  }
    // عرض حجوازBookingGetPatientModel  المريض
    getBookingPatientByIdOk(id:number,ids:Byte):Observable<BookingGetPatientModel[]>{
      return this.http.get<BookingGetPatientModel[]>(this.url+"GetBookingGetPatientOk/"+id+"/"+ids,this.headers).pipe()
    }
  //
  getBookingHospitalByDat(id:number,datew:Date):any{
    console.log(datew)
    return this.http.get(this.url+"GetBookingGetToday/"+id+"/"+new Date(),this.headers).pipe()
  }
  
  dependBooking(id:number, model:BoookingGetByIdModel):Observable<BoookingGetByIdModel>{
    return this.http.put<BoookingGetByIdModel>(this.url+"DependBooking/"+id,model,this.headers).pipe()
  }
  getdBooking(id:number):Observable<BoookingGetByIdModel>{
    return this.http.get<BoookingGetByIdModel>(this.url+"GetbookingById/"+id,this.headers).pipe()
  }


}
