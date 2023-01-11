import { Byte } from "@angular/compiler/src/util";

export class BookingAndPatienModel {
  id:number;
  doctorId:number;
  splicationId:number;
  bookingDate:Date;
  dayName:string;
  bookingStatus:Byte;
  // patientsId:number;
  patientUserName:string;
  patientPhone:string;
  hospitalsId:number;
  bookingId:number;
  daysId:Byte;
  bookingRegister:Date;
  userId:string;
}
