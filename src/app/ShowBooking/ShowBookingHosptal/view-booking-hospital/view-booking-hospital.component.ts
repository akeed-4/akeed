import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BookingGetModel } from 'src/app/ModelFile/BookingGetModel';
import { BoookingGetByIdModel } from 'src/app/ModelFile/BoookingGetByIdModel';
import { MyserviceService } from 'src/app/Myservice/myservice.service';
import { BookingServiceService } from 'src/app/ServiceFile/BookingService.service';
import { HospitalsServiceService } from 'src/app/ServiceFile/HospitalsService.service';
import { CryptService } from 'src/app/ServiceFile/serviceLogin/crypt.service';

@Component({
  selector: 'app-view-booking-hospital',
  templateUrl: './view-booking-hospital.component.html',
  styleUrls: ['./view-booking-hospital.component.css']
})
export class ViewBookingHospitalComponent implements OnInit {
  @ViewChild('MyModal') mymodal: any;

bookingGetData:BookingGetModel[]=[];
booking=new BoookingGetByIdModel();
bookingsend=new BoookingGetByIdModel();
data=new Date();
myData=new Date();
isf:boolean
email !: string;
idHospital:number

  constructor(private BookingService:BookingServiceService,
     private serviceHospital:HospitalsServiceService,
     private servct:CryptService,
    private myserv:MyserviceService) { }


  ngOnInit(): void {
    this.isf=false
  this.  getIdA()
    this.myData.setDate(this.data.getDate());
    console.log(this.myData)
    this.getDataBookingHospitalById()
    // this.getDataBookingHospitalByIdD(this.myData);
  }
getDataBookingHospitalById(){
  this.BookingService.getBookingHospitalById(this.idHospital).subscribe(
    (list:BookingGetModel[])=>{
      this.bookingGetData=list
      // console.log(this.bookingGetData)
    },e=>{
      console.log(e.error)
    }
  )
}

update(id:number){
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
    this.bookingsend.bookingStatus=1;
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



cancalBooking(id:number){

  this.isf=true
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

getIdA(){
  // const emailw = localStorage.getItem('email');
  // console.log(emailw)

  //  const email2 = this.servct.Decrypt(localStorage.getItem('emailw') || '{}');
  this.email = this.servct.Decrypt(localStorage.getItem('email') || '{}');

   console.log(this. email)
   this.myserv.GetIdUser(this.email).subscribe(x=>{
     var id=x;
     console.log(id)

       this.serviceHospital.GetIdHospital(id).subscribe(x=>{
         this.idHospital= Number(x);
         console.log(this.idHospital)

       },e=>{
         console.log(e.error)
       }
       )

   },e=>{
     console.log(e.error)
   }
   )


}


}
