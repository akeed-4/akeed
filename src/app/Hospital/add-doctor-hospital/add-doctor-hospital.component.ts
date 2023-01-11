import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dapertmens } from 'src/app/ModelFile/Dapertmens';
import { DoctorModel } from 'src/app/ModelFile/DoctorModel';
import { HospitalsDoctorsModel } from 'src/app/ModelFile/HospitalsDoctorsModel';
import { HospitalsModel } from 'src/app/ModelFile/HospitalsModel';
import { HospitalsSplicationsModel } from 'src/app/ModelFile/HospitalsSplicationsModel';
import { HospitalViewModel } from 'src/app/ModelFile/HospitalViewModel';
import { Specialties } from 'src/app/ModelFile/Specialties';
import { DapermentSService } from 'src/app/ServiceFile/DapermentService/DapermentS.service';
import { DoctorsServiceService } from 'src/app/ServiceFile/DoctorsService.service';
import { HospitalsDoctorsServiceService } from 'src/app/ServiceFile/HospitalsDoctorsService.service';
import { HospitalsServiceService } from 'src/app/ServiceFile/HospitalsService.service';

@Component({
  selector: 'app-add-doctor-hospital',
  templateUrl: './add-doctor-hospital.component.html',
  styleUrls: ['./add-doctor-hospital.component.css']
})
export class AddDoctorHospitalComponent implements OnInit {
  addhospitalsDoctors=new HospitalsDoctorsModel();
  hospitalsSplications=new HospitalsSplicationsModel();
  hospitalsSplications1: HospitalsSplicationsModel[];
  hospitalsSplicationsSplic: HospitalsSplicationsModel[];
  hospital:HospitalsModel[];
  x:number=0;
  arr:number[]=[];
  arrS:number[]=[];
  arrDaperment:Dapertmens[]= [];
  arrSpecialties:Specialties[]=[];
  arrDoctors:DoctorModel[]=[];
  //خاص بالمستشفي
  listHospitalName : HospitalViewModel []=[]
  listHospital: HospitalViewModel []=[]
  idHospitals:any
hopitalName:string
  //
  constructor(private rout:Router,private activeRout:ActivatedRoute,
    private serviceHospital:HospitalsServiceService,
    private serviceDapertment:DapermentSService,
    private serviceDoctors:DoctorsServiceService,
     private serviceHospitalDoctoc:HospitalsDoctorsServiceService,
    private fb:FormBuilder) { }

    //
    doctorHosptialSpeciGrop:FormGroup;
//
  ngOnInit(): void {
    this.hospital=[];
    this.doctorHosptialSpeciGrop= this.fb.group({
      doctorsId:0,
      hospitalsId:0,
      specialtiesId:0,
      dapertmentId:0

    })



this.getHospitalDape()
this.getId()
// console.log( this.listHospital.values.)




  }


  
  changeWebsiteDapertment(e:any){
    this.arrSpecialties=[];
    // console.log(this.doctorHosptialSpeciGrop.value.dapertmentId)
    this.serviceHospital.  getSplicatiosByIdHospitalWDap(this.doctorHosptialSpeciGrop.value.dapertmentId,1)
    .subscribe((list:HospitalsSplicationsModel[])=>{
      this.hospitalsSplicationsSplic=list;
      // console.log(this.hospitalsSplicationsSplic)
      for ( var hos of this.hospitalsSplicationsSplic){

        this.arrS.push(hos.specialtiesId)

        console.log(this.arrS)
         this.x=0
         for(var i=0; i<this.arrS.length;i++){
          if(this.arrS[i]==hos.specialtiesId){
            this.x++;
          }
          
         }
         if(this.x<=1){

       this.serviceDapertment.getSpecialtiesById(hos.specialtiesId).subscribe((list:any)=>{
         this.arrSpecialties.push(list);


       })
         }



       }

    },(err: { error: any; })=>{
      console.log(err.error);
      });

  }

  changeWebsiteSpecialties( e:any){
    this.arrDoctors=[];
    this.serviceDoctors.getDoctorsByIdSpecialties
    (this.doctorHosptialSpeciGrop.value.specialtiesId).subscribe((list:DoctorModel[])=>
    {
    this.arrDoctors=list;
    console.log(this.arrDoctors)

    },e=>{
      console.log(e.console.error);

    });


  }
  geth(){

    // this.serviceHospital.getHospitalId(1).subscribe((list:HospitalsModel[]) =>{
    //   this.hospital=list;
    //   console.log(this.hospital)

    // }
    // ,(err: { error: any; })=>{
    //   console.log(err.error);
    //   });
  }
  getHospitalDape(){

    this.serviceHospital. getDapSplicationHospitalById(1).subscribe((x:HospitalsSplicationsModel[])=>{
      this.hospitalsSplications1=x;
      for ( var hos of this.hospitalsSplications1){
       this.arr.push(hos.dapertmentId)

       console.log(this.arr)
        this.x=0
        for(var i=0; i<this.arr.length;i++){
         if(this.arr[i]==hos.dapertmentId){
           this.x++;
         }
        }
        if(this.x<=1){

      this.serviceDapertment.getDaperment(hos.dapertmentId).subscribe((list:any)=>{
        this.arrDaperment.push(list);



      })
        }



      }
      // console.log(this.arrDaperment)


    }
    ,(err: { error: any; })=>{
      console.log(err.error);
      });

  }
  //  استعاده نافذه اضافة تخصص تجديد الي المستشفي
  addNewSpecialties(){
    this.rout.navigate(['AddSplicationHospital']);

  }
  //  اضافه  بيانات دكتور جديد
  addNewDoctor(){
    this.rout.navigate(['AddDoctors']);

  }
  addHospitalsDoctors(){
    // console.log("hh")
    this.addhospitalsDoctors.hospitalsId=1;
    this.addhospitalsDoctors.doctorsId=this.doctorHosptialSpeciGrop.value.doctorsId;
    this.addhospitalsDoctors.specialtiesId=this.doctorHosptialSpeciGrop.value.specialtiesId;
    this.addhospitalsDoctors.dapertmentId=this.doctorHosptialSpeciGrop.value.dapertmentId;
    console.log(this.addhospitalsDoctors)
    this.serviceHospitalDoctoc.AddDataHospitalsDoctors(this.addhospitalsDoctors).subscribe(
      x=>{
        alert("ok")
        this.doctorHosptialSpeciGrop.reset();
      }, (err: { error: any; })=>{
        console.log(err.error);
        if(err.error=="الطيب موجود مسبقا"){
          alert("الطيب موجود مسبقا")
          this.ngOnInit();

        }
        });


  }
// ff(){
//   this.serviceHospital.getSplicationHospitalById(1).subscribe((x:any )=>{
//     this.hospitalsSplications1=x;
//     console.log(this.hospitalsSplications1)

//     for ( var hos of this.hospitalsSplications1){
//       console.log(hos)
//       this.x=0

//       this.serviceDapertment.getDaperment(hos.dapertmentId).subscribe((list:any)=>{
//         this.arrDaperment.push(list);


//       })
//   //     for (var i=0; i<this.arr.length; i++){
//   //       if(i===0){


//   //       }

//   // elseif(this.arr[i]==hos.dapertmentId){

//   //       }
//   //     }


//     }
//     console.log(this.arrDaperment)


//   }
//   ,(err: { error: any; })=>{
//     console.log(err.error);
//     });
// }

getId(){

  this.activeRout.paramMap.subscribe(param=>{
  this. idHospitals=param.get('id')
  // console.log(this.idHospitals)
  this.getInfHospital(this.idHospitals)

    })


  // }
}
getInfHospital(id:number){

  this.serviceHospital.getNameHospitalById(id).subscribe(
    (list:any)=>{
      this.listHospitalName=list;
      // this.hopitalName=this.listHospitalName.hospitalUserNameAR
      // console.log(this.listHospitalName)
      for(var ho of  this.listHospitalName){
        this.listHospital.push(ho)
      }



    }
  )

}
}


