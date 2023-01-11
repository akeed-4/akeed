

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DaysWithNumModels } from 'src/app/ModelFile/DaysWithNumModels';
import { Console } from 'console';



@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css'],
  providers: [DatePipe]
})
export class DoctorRegisterComponent implements OnInit {
myData:'EEEE, MMMM d, y'
dateString = '02/05/2020';
date = new Date();

dname=Date();
datDoctor=new DaysWithNumModels();
datDoctorDay:DaysWithNumModels[]=[];
  constructor(private fb:FormBuilder,private datePipe: DatePipe) { }
fGrop:FormGroup;
  ngOnInit(): void {
    this.fGrop=this.fb.group({
      dateDay :new Date("01/05/2020")
    })
    // this.datDoctor.id=0;
    // this.datDoctor.dayName='';
    // this.dname=""
    this.rgis()

  }
  rgis(){
//     this.datDoctorDay=[];

//     var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//     for (var i=0; i<7; i++){
//       this.datDoctor=new DaysWithNumModels();
//  const date=new Date()

//    const date2=new Date();
//  date.setDate(this.date.getDate() + i);
//       date2.setDate(this.date.getUTCDay()+i);

//       var weekdayNumber = date.getDay()
//       var weekdayName = arrayOfWeekdays[weekdayNumber]


//       this.datDoctor.id=date2.getUTCDay();
//       this.datDoctor.dayName=weekdayName;
//       this.datDoctor.dMount= date.toLocaleDateString('En-en');


//       this.datDoctorDay.push(this.datDoctor);
//       console.log( this.datDoctor)







    }
//     var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// var dateObj = new Date()
// var weekdayNumber = dateObj.getDay()
// var weekdayName = arrayOfWeekdays[weekdayNumber]



  // }
  // outDate(i:any){
  //   console.log(i)

  // }

}


