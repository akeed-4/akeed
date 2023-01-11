import { Byte } from "@angular/compiler/src/util";

export class BookingTestModel {
  id:number;
  doctorId:number;
  splicationId:number;
  bookingDate:Date;
  dayName:string;
  bookingStatus:Byte;

  daysId:Byte
}
