import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalsModel } from 'src/app/ModelFile/HospitalsModel';
import { HospitalsServiceService } from 'src/app/ServiceFile/HospitalsService.service';

@Component({
  selector: 'app-hospital-veiwdatain',
  templateUrl: './hospital-veiwdatain.component.html',
  styleUrls: ['./hospital-veiwdatain.component.css']
})
export class HospitalVeiwdatainComponent implements OnInit {
getHopsitalList:HospitalsModel[]=[];
  constructor( private rout:Router,
    private servicHospital:HospitalsServiceService) { }

  ngOnInit(): void {
    this.getAllHospitals()
  }
  Hospitalview(id:any){
    // console.log(e)
    this.rout.navigate(['HospitalViewInfo',id]);
  }
  hospitalBookingInfoOne(id:any){
    if(id)
    {
      this.rout.navigate(['HospitalBookingInfoTwo',id]);


    }
  }

  // عرض جميع المستشفيات
  getAllHospitals(){
    this.servicHospital.getAllHospital().subscribe((list:any)=>{
      this.getHopsitalList=list;
      console.log(this.getHopsitalList)


    },(err: { error: any; })=>{
      console.log(err.error);
      });
  }

}
