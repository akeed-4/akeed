import { Component, OnInit } from '@angular/core';
import { BookingGetModel } from 'src/app/ModelFile/BookingGetModel';
import { BookingServiceService } from 'src/app/ServiceFile/BookingService.service';

@Component({
  selector: 'app-view-booking-hospital-new',
  templateUrl: './view-booking-hospital-new.component.html',
  styleUrls: ['./view-booking-hospital-new.component.css']
})
export class ViewBookingHospitalNewComponent implements OnInit {


bookingGetData:BookingGetModel[]=[];

dataBopkingRegister=new Date();
  constructor(private BookingService:BookingServiceService) { }


  ngOnInit(): void {
    // const datat=new Date();
    // datat.setDate(this.dataBopkingRegister.getDate())
    // console.log(datat)
    // this.getDataBookingHospitalById()
    // this.getDataBookingHospitalByIdD(datat);
  }
// getDataBookingHospitalById(){
//   this.BookingService.getBookingHospitalById(1).subscribe(
//     (list:BookingGetModel[])=>{
//       this.bookingGetData=list
//       console.log(this.bookingGetData)
//     },e=>{
//       console.log(e.error)
//     }
//   )
// }
// getDataBookingHospitalByIdD(da:any){
//   console.log(da)
//   this.BookingService.getBookingHospitalByDat(1,da).subscribe(
//     (list:BookingGetModel[])=>{
//       this.bookingGetData=list
//       console.log(this.bookingGetData)
//     },(e: { error: any; })=>{
//       console.log(e.error)
//     }
//   )
// }
}
