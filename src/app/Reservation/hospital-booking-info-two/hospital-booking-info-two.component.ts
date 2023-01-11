import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Booking } from 'src/app/ModelFile/booking';
import { BookingAndPatienModel } from 'src/app/ModelFile/BookingAndPatienModel';
import { BookingModel } from 'src/app/ModelFile/BookingModel';
import { BookingTestModel } from 'src/app/ModelFile/bookingTestModel';
import { DaysWithNumModels } from 'src/app/ModelFile/DaysWithNumModels';
import { DoctorView } from 'src/app/ModelFile/DoctorView';
import { DoctorWorkTimeDayModel } from 'src/app/ModelFile/DoctorWorkTimeDayModel';
import { HospitalViewModel } from 'src/app/ModelFile/HospitalViewModel';

import { PatientsModel } from 'src/app/ModelFile/PatientsModel';
import { Specialties } from 'src/app/ModelFile/Specialties';
import { UsersModelView } from 'src/app/ModelFile/UsersModelView';
import { MyserviceService } from 'src/app/Myservice/myservice.service';
import { BookingServiceService } from 'src/app/ServiceFile/BookingService.service';
import { DoctorWorkTimeDayServiceService } from 'src/app/ServiceFile/DoctorWorkTimeDayService.service';
import { HospitalsServiceService } from 'src/app/ServiceFile/HospitalsService.service';
import { CryptService } from 'src/app/ServiceFile/serviceLogin/crypt.service';
import { ServicePatientsService } from 'src/app/ServiceFile/servicePatients.service';

@Component({
  selector: 'app-hospital-booking-info-two',
  templateUrl: './hospital-booking-info-two.component.html',
  styleUrls: ['./hospital-booking-info-two.component.css']
})
export class HospitalBookingInfoTwoComponent implements OnInit {

  [x: string]: any;
  email !: string;
  userId:string
  hospitalsSplicationsSplic:Specialties[]=[];
  doctorView:DoctorView[];
  doctoctWorDayList:DoctorWorkTimeDayModel[]
  doctoArr=new DoctorView()
  idHospitals:any
  listHospitalName: HospitalViewModel[]=[]
  hosptalArr=new HospitalViewModel()

  userList=new  UsersModelView()
  listPatients:PatientsModel[]=[]
  modePlatin=new PatientsModel()
  modwPlatinS=new PatientsModel()
  modelHosptial=new HospitalViewModel()
  listPatients2=new PatientsModel();
// خاص بالايام
toggle = true;
status = "Enable";
 divItems = document.getElementsByClassName("radiodiv")
  date = new Date();
datDoctor=new DaysWithNumModels();
datDoctorDay:DaysWithNumModels[]=[];
datDoctorDay1=new DaysWithNumModels();
datDoctorDay4:DaysWithNumModels[]=[];
datDoctorDay3:DaysWithNumModels[]=[];
datDoctorDay2:DaysWithNumModels[]=[];
  pHour:string
  message:string
  message1:string

  //خاص بيانات نافذة تاكيد الحجز
  nameDoctor:string
  nameHospital:string
  databookingok:Date
  dayName:string
  namePaltin:string

  //خاص في بيانات الحجز النهائي
  bookingDataFinal=new BookingModel();
  bookinTest=new BookingTestModel();
  dataBopkingRegister=new Date();
  bookingAndPat=new BookingAndPatienModel()

  //

  constructor( private rout:Router, private fb:FormBuilder,private activeRout:ActivatedRoute,
    private serviceHospital:HospitalsServiceService,
     private servicePatient:ServicePatientsService,
     private servicDoctorWDays:DoctorWorkTimeDayServiceService,
     private serviceBooking:BookingServiceService,
     private servct:CryptService,
     private myserv:MyserviceService) { }
  bookingGrop:FormGroup;
  hospitalGrop:FormGroup;
  isShowHour:Boolean=false
  isShowDays:Boolean=false
  bo:Booking;
  isModel:boolean=false

  // messgeVali={
  //   liName:{
  //     required:'اسم المريض مطلوب '
  //   }
  // }


  ngOnInit():void {


    this.message="      الرجاء اختيار الطبيب المناسب من اجل ظهور المواعيد المتاحة  "
    // this.message='';
    this.pHour=''
    this.bo={
      liName:'',
      phoneName:'',
      hospitalName:''

    }

    this.bookingGrop=this.fb.group({
      liName:['',Validators.required],
      phoneName:['',[Validators.required, Validators.minLength(6) ]],
      hospitalName:['',Validators.required]
    })
    this.hospitalGrop=this.fb.group({
      hospitalsId:0,
      specialtiesId:0,
      doctorId:0,
      dayId:0,
      daynumber:0,
      dayName:'',
      dataBook:Date,
      servicId:0,
      payId:0,
      patientId:0,
      patientsName:'',
      patientsPhone:['',[Validators.required, Validators.minLength(6) ]],
      hospitalNames:'',
      checkedPl:true

    })

    // this.  rgis();
    // this.rgis2ss();
    this. getIdA()
    this.  getId();
    this.  getInfHospital(this.idHospitals)
    this.getSpli();
    // this.showDatPatients(1);
    this.rgisfix()



  }

getIdA(){

  this.email = this.servct.Decrypt(localStorage.getItem('email') || '{}');

  //  console.log(this. email)
   this.myserv.GetDataUser(this.email).subscribe((list:any)=>{
     this.userList=list;
     this.modePlatin.patientUserName=this.userList.userNameArabic;

this.modePlatin.patientPhone=this.userList.phoneNumber
this.userId=this.userList.userId;

   })


}
  //دالة تجهيز البيانات للارسال
 bookingHospital(){
console.log(this.userId)

//البيانات المراسله النهائي
// this.bookingDataFinal.bookingDate=this.hospitalGrop.value.dataBook;
console.log(this.idHospitals)
this.bookingDataFinal.doctorId=this.hospitalGrop.value.doctorId
// this.bookingDataFinal.patientsId=1;

this.bookingDataFinal.splicationId=this.hospitalGrop.value.specialtiesId;
// this.bookingDataFinal.daysId=this.hospitalGrop.value.dayId;
// this.bookingDataFinal.dayName=this.hospitalGrop.value.dayName;
const datat=new Date();
datat.setDate(this.dataBopkingRegister.getDate())
this.bookingDataFinal.bookingRegister=datat;

//



////// بيانات لتاكيد
    this.namePaltin=this.hospitalGrop.value.patientsName;
   this.databookingok= this.bookingDataFinal.bookingDate
   this.dayName=  this.bookingDataFinal.dayName
   for(var ho of this.listHospitalName){
    this.nameHospital=ho.hospitalUserNameAR
    this.bookingDataFinal.hospitalsId=ho.id

   }
 if(this.bookingDataFinal.splicationId==0){
    this.isModel=false
    const select=document.getElementById('specialtiesId');

    alert("اختر التخصص ")
    select?.focus()

   }
 else if(this.bookingDataFinal.doctorId==0&&this.bookingDataFinal.splicationId>0){
  this.isModel=false
  const select=document.getElementById('doctorId');

  alert("اختر الطبيب ")
  select?.focus()

}
else if(this.bookingDataFinal.dayName==null&&this.bookingDataFinal.doctorId>0&&this.bookingDataFinal.splicationId>0){
  this.isModel=false
  const div=document.getElementById('dayN');

  alert("اختر اليوم ")
  div?.focus

}
else{
  this.isModel=true

}


  }


  onClickDay(i:any, dateb:Date,dayName:string,daynum:number){
    // const Button=document.getElementById('myModal');
    // input?.draggable()
    if(!true){
      // Dont open the modal
    } else {
       // Open the modal

    }

this.bookingDataFinal.daysId=daynum;
 this.bookingDataFinal.dayName=dayName;
   this.bookingDataFinal.bookingDate=dateb;
    // console.log( daynum)
    console.log(this.hospitalGrop.value.dayName)

    // console.log()
  }
  // عرض الوقت بالساعة 667552034

  showHour(data:string){
    if (this.isShowHour){
    this.isShowHour=false
    // console.log("f")

  }else
  this.isShowHour=true
  this.pHour=data
  data=''

  }
  showDay(){
    // this.hospitalGrop.value.doctorId
    if (this.isShowDays){
    this.isShowDays=false
    return true;

  }else
  this.isShowDays=true
  return false
  // this.pHour=data
  // data=''

  }
  // اظهار رساله بملغ الدفع
  changeWebsite(e:any) {

    // console.log(e.target.value);
    if(e.target.value==1){
      this.message1=" مبلغ التسديد 3000 ريال"
    }
    else {this.message1=''}

  }

// اخذ رقم المستشفي
  getId(){

    this.activeRout.paramMap.subscribe(param=>{
    this.  idHospitals=param.get('id')
        // console.log( this.  idHospitals);
      })
    // this.serviceHospital.getNameHospitalById(this.idHospitals).subscribe(
    //   (list:any)=>{
    //     // this.listHospitalName=list
    //     this.hosptalArr=list;
    //     this.modelHosptial.hospitalUserNameAR=this.hosptalArr.hospitalUserNameAR
    //   console.log(this.hosptalArr.id)



    //   },


    // );

    // console.log(this.hospitalName)


    // }
  }

  getInfHospital(id:number){
    this.serviceHospital.getNameHospitalById(id).subscribe(
      (list:any)=>{
        this.listHospitalName=list;
  // this.modelHosptial.hospitalUserNameAR=this.hosptalArr.hospitalUserNameAR;
  // this.modePlatin.patientPhone=this.listPatients2.patientPhone;
  // console.log(  this.modelHosptial.hospitalUserNameAR)


      }
    )

  }

//#region  // عرض الايام
  rgis(){
    this.datDoctorDay=[];
    var arrayOfWeekdays = ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"]

    // var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    for (var i=0; i<7; i++){
    this.datDoctor=new DaysWithNumModels();
   const date=new Date()

   const date2=new Date();
   date.setDate(this.date.getDate() + i);
      date2.setDate(this.date.getDate()+i);

      var weekdayNumber = date.getUTCDay()
      var weekdayName = arrayOfWeekdays[weekdayNumber]


      this.datDoctor.id=date2.getDay();
      this.datDoctor.daynum=weekdayNumber;
      // console.log(date2.getUTCDay());
      this.datDoctor.dayName=weekdayName;
      this.datDoctor.dMount= date;


      this.datDoctorDay.push(this.datDoctor);








    }

    // console.log( this.datDoctorDay)



  }
  //#endregion
 // عرض الايام
  rgisfix(){
    this.datDoctorDay=[];
    var arrayOfWeekdays = ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"]

    // var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    for (var i=0; i<7; i++){
    this.datDoctor=new DaysWithNumModels();
   const date=new Date()

   const date2=new Date();
   date.setDate(this.date.getDate() + i);
      date2.setDate(this.date.getDate()+i);

      var weekdayNumber = date.getUTCDay()
      var weekdayName = arrayOfWeekdays[weekdayNumber]


      this.datDoctor.id=date2.getDay();
      this.datDoctor.daynum=weekdayNumber;
      // console.log(date2.getUTCDay());
      this.datDoctor.dayName=weekdayName;

      this.datDoctor.dMount= date;
      // let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
      // console.log(latest_date)


if(i<4){

  this.datDoctorDay2.push(this.datDoctor);
    }
    if(i>=4&&i<7){
      this.datDoctorDay4.push(this.datDoctor);

    }

    }
// console.log(this.datDoctorDay2)
// console.log("//////////////////////")
// console.log(this.datDoctorDay4)

  }

getSpli(){
  this.hospitalsSplicationsSplic=[]
    this.serviceHospital.getSplicationHospitalById( this.  idHospitals)
    .subscribe((list:Specialties[])=>{
      this.hospitalsSplicationsSplic=list;
      // console.log(this.hospitalsSplicationsSplic)
  })
}
// عرض اطباء  المستشفي  بواسطة التخصص
changeDoctorview(e:any){


  this.doctorView=[];

  this.serviceHospital.getDoctorHospitalByIdSplicatios(this.idHospitals,this.hospitalGrop.value.specialtiesId).subscribe(
    (list:DoctorView[])=>{
      this.hospitalGrop.value.doctorId=0
      this.doctorView=list;

    },er=>{
      console.log(er.erorr)
    }
  );
}

changeSlectDoctor(id:any){

this.doctoctWorDayList=[]
this.servicDoctorWDays.getAppointmentsDoctorsDay(this.hospitalGrop.value.doctorId).subscribe(
  (list:DoctorWorkTimeDayModel[])=>{
    this.doctoctWorDayList=list;
    if( this.doctoctWorDayList.length >0){
      this. isShowDays=true
      this.message='';

    }
    else{
      this. isShowDays=false
      this.message=' الطبيب الذي تم اختياره لايستقبل حجوزات موقتأ';

    }

  },e=>{
    console.log(e.error)
  }
)

  for(var i=0; i<this.doctorView.length; i++){
    for(var doctor of this.doctorView)
    if(this.hospitalGrop.value.doctorId== doctor.id){
      this.nameDoctor=doctor.doctorUserName

    }
  }

}


enableDisableRule(i:any) {
console.log(i)
  if( i==1){
  this.toggle = !this.toggle;
  this.status = this.toggle ? "Enable" : "Disable";}
}
// عرض بيانات المريض
showDatPatients(id:any){
  this.servicePatient.getPatientsBylId(id).subscribe(
    (list:any)=>{
      this.listPatients2=list;


this.modePlatin.patientUserName=this.listPatients2.patientUserName;
this.modePlatin.patientPhone=this.listPatients2.patientPhone;
// console.log(this.modePlatin.patientPhone)


    }
  )


}
// عرض اختار ادخل بيانات المريض
onCheckboxChange(e:any){

  if (e.target.checked) {
    this.hospitalGrop.value.checkedPl=true;
    this.modePlatin.patientUserName=this.listPatients2.patientUserName;
    this.modePlatin.patientPhone=this.listPatients2.patientPhone
  } else {
    this.hospitalGrop.value.checkedPl=false;

    this.modePlatin.patientUserName='';
    this.modePlatin.patientPhone=''
  }
// console.log( this.hospitalGrop.value.checkedPl)
}

dayfree(id:boolean){
  if(id==true){
    return true
  }else{
    return false
  }

}

// ارسال البيانات الي دالة الحجز
saveDataBookingFin(){
  this.bookingDataFinal.bookingStatus=0



  // console.log(this.bookingDataFinal)

  if( this.hospitalGrop.value.checkedPl==true){
    this.servicePatient.GetIdPatientByUserId(this.userId).subscribe((x:any)=>{
      var idPatinet=x;
      if(idPatinet!=null){
        this.bookingDataFinal.patientsId=Number( idPatinet);
        this.serviceBooking.AddBooking(this.bookingDataFinal).subscribe(x=>{
          alert("ok")
        this.rout.navigateByUrl('Home')
        },e=>{
          console.log(e.error)
        }
        );

      }
      else{
        this.addBookingAndAddPal()

      }
    })

    // console.log(this.bookinTest)


  }
  else{

this.addBookingAndAddPal()


  }


}
addBookingAndAddPal(){

this.bookingAndPat.bookingDate=this.bookingDataFinal.bookingDate;
this.bookingAndPat.doctorId=this.bookingDataFinal.doctorId
this.bookingAndPat.userId=this.userId;
this.bookingAndPat.hospitalsId=this.bookingDataFinal.hospitalsId;
this.bookingAndPat.splicationId=this.bookingDataFinal.splicationId;
this.bookingAndPat.daysId=this.bookingDataFinal.daysId;
this.bookingAndPat.dayName=this.bookingDataFinal.dayName;
this.bookingAndPat.bookingRegister=this.bookingDataFinal.bookingRegister;
this.bookingAndPat.bookingStatus=0;
this.bookingAndPat.patientUserName=this.modePlatin.patientUserName;
this.bookingAndPat.patientPhone=this.modePlatin.patientPhone;

    this.serviceBooking.AddBookingAndPatins(this.bookingAndPat).subscribe(x=>{
      alert("ok")
      this.rout.navigateByUrl('Home')
    },e=>{
      console.log(e.error)
    }
    );

}
}
