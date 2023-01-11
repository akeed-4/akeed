import { Byte } from "@angular/compiler/src/util";

export class BoookingGetByIdModel {
  id:number;
  doctorId:number;
  splicationId:number;
  bookingDate:Date;
  dayName:string;
  bookingStatus:Byte;
  daysId:Byte;
  bookingRegister:Date;
}
