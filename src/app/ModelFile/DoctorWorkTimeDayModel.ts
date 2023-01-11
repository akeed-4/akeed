import { Byte } from "@angular/compiler/src/util";

export class DoctorWorkTimeDayModel {
  id:number;
  doctorsId:number;
  daysId:Byte;
  stratTime:string
  endTime:string;
  stateDay:boolean
}
