import { Byte } from "@angular/compiler/src/util";

export class BookingModel {
  id:number;
  doctorId:number;
  splicationId:number;
  bookingDate:Date;
  dayName:string;
  bookingStatus:Byte;
  patientsId:number;
  hospitalsId:number;
  bookingId:number;
  daysId:Byte;
  bookingRegister:Date

}
