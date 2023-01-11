import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorModel } from 'src/app/ModelFile/DoctorModel';
import { DoctorsHospitalsModelView } from 'src/app/ModelFile/DoctorsHospitalsModelView';
import { DoctorsServiceService } from 'src/app/ServiceFile/DoctorsService.service';
import { HospitalsServiceService } from 'src/app/ServiceFile/HospitalsService.service';

@Component({
  selector: 'app-view-all-doctor',
  templateUrl: './view-all-doctor.component.html',
  styleUrls: ['./view-all-doctor.component.css']
})
export class ViewAllDoctorComponent implements OnInit {
  // ViewInfoDoctor
  idHospitals:any;
  arr:number[]=[];
  x:number=0;
  constructor( private rout:Router,
    private serviceDoctors:DoctorsServiceService,
    private serviceHospital:HospitalsServiceService,
    private activeRout:ActivatedRoute) { }
 doctorsList:DoctorModel[];
 docotorslistHospital:DoctorsHospitalsModelView[]=[]
 docotorsarr:DoctorsHospitalsModelView[]=[]
  ngOnInit(): void {
    this.doctorsList=[];
    this.getId()
    // console.log( this.  idHospitals);

   this.viewALlDoctorsHospitalById();
  }

    // اخذ رقم المستشفي
    getId(){
      this.activeRout.paramMap.subscribe(param=>{
      this.  idHospitals=param.get('id')
        });
      }
  showInfoDocter( id:any){

    this.rout.navigate(['ViewInfoDoctor',id]);
  }
viewALlDoctors(){
  this.serviceDoctors.getAllDoctor().subscribe((list:any)=>{
    this.doctorsList=list;
    console.log(this.doctorsList)
  })



}
// ارجاع اطباء مستشفي معين
viewALlDoctorsHospitalById(){
  this.serviceHospital.getDoctorsHospitalById(this.idHospitals).subscribe((list:any)=>{
    this.docotorslistHospital=list;
    console.log(this.docotorslistHospital)
    for ( var doctot of this.docotorslistHospital){
      this.arr.push(doctot.id)
      this.x=0
      for(var i=0; i<this.arr.length;i++){
        if(this.arr[i]==doctot.id){
          this.x++;
        }
       }
       if(this.x<=1){
         this.docotorsarr.push(doctot)


       }
    }
  })



}
hospitalBookingInfo(){

  this.rout.navigate(['HospitalBookingInfoTwo',1]);
}
}
