import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { BookingGetPatientModel } from 'src/app/ModelFile/BookingGetPatientModel';
import { BoookingGetByIdModel } from 'src/app/ModelFile/BoookingGetByIdModel';
import { BookingServiceService } from 'src/app/ServiceFile/BookingService.service';

@Component({
  selector: 'app-view-bookin-patient',
  templateUrl: './view-bookin-patient.component.html',
  styleUrls: ['./view-bookin-patient.component.css']
})
export class ViewBookinPatientComponent implements OnInit {
//BookingGetPatientModel
bookingGetData:BookingGetPatientModel[]=[]
bookingGetDataOk:BookingGetPatientModel[]=[]
bookingGetDataCancal:BookingGetPatientModel[]=[]
bookingGetDataWating:BookingGetPatientModel[]=[]
booking=new BoookingGetByIdModel();
bookingsend=new BoookingGetByIdModel();
message:string

  constructor( private BookingService:BookingServiceService) { }
  showSpinner = true;
  ngOnInit(): void {
    this.message=''
    this.getDataBookingHospitalById();
    this.getDataBookingHospitalByIdOk(1);
    this.getDataBookingHospitalByIdCancal(2);

  }
  okMyBooking(){
    // this.getDataBookingHospitalByIdOk(1);
  }
  allMyBooking(){
    this.getDataBookingHospitalById();
  }
  cancalMyBooking(){
    // this.getDataBookingHospitalByIdOk(2);

  }
  getDataBookingHospitalById(){
    this.BookingService.getBookingPatientById(1).subscribe(
      (list:BookingGetPatientModel[])=>{
        this.bookingGetData=list
        console.log(this.bookingGetData)
      },e=>{
        console.log(e.error)
      }
    )
  }
  getDataBookingHospitalByIdOk(ids:Byte){
    // this.bookingGetData=[]
    this.BookingService.getBookingPatientByIdOk(1,ids).subscribe(
      (list:BookingGetPatientModel[])=>{
        this.bookingGetDataOk=list
        if(this.bookingGetDataOk.length==0){
          this.message=' لايوجد حجوزات موكده'
        }

        // console.log(this.bookingGetData)
      },e=>{
        console.log(e.error)
      }
    )
  }

  getDataBookingHospitalByIdwating(ids:Byte){
    // this.bookingGetData=[]
    this.BookingService.getBookingPatientByIdOk(1,ids).subscribe(
      (list:BookingGetPatientModel[])=>{
        this.bookingGetDataWating=list
        if(this.bookingGetDataOk.length==0){
          this.message=' لايوجد حجوزات قيد الانتظار '
        }

        // console.log(this.bookingGetData)
      },e=>{
        console.log(e.error)
      }
    )
  }
  getDataBookingHospitalByIdCancal(ids:Byte){
    // this.bookingGetData=[]
    this.BookingService.getBookingPatientByIdOk(1,ids).subscribe(
      (list:BookingGetPatientModel[])=>{
        this.bookingGetDataCancal=list

        console.log(this.bookingGetData)
      },e=>{
        console.log(e.error)
      }
    )
  }
  cancalBooking(id:number){


    this.BookingService. getdBooking(id).subscribe(
      (list:any)=>{
      this.booking=list;
      console.log(this.booking)
      this.bookingsend.id=this.booking.id;
      this.bookingsend.bookingDate=this.booking.bookingDate;
      this.bookingsend.bookingRegister=this.booking.bookingRegister;
      this.bookingsend.dayName=this.booking.dayName;
      this.bookingsend.daysId=this.booking.daysId;
      this.bookingsend.doctorId=this.booking.doctorId;
      this.bookingsend.splicationId=this.booking.splicationId;
      this.bookingsend.bookingStatus=2;
      this.BookingService.dependBooking(this.bookingsend.id,this.bookingsend).subscribe(x=>{
        alert("ok")
        this.getDataBookingHospitalById()
      },e=>{
        console.log(e.error)
      }
      )

      // alert("تم ناكيد الحجز")
    },e=>{
      console.log(e.error)
    }
    )


  }

}
