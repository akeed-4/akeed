import { Byte } from "@angular/compiler/src/util";

export class BookingGetModel {
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
  splicationName:string;
  doctorUserName:string;
  patientPhone:string;
  patientUserName:string
  bookingRegister:Date;
}
