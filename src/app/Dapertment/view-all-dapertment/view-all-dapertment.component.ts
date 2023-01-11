import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dapertmens } from 'src/app/ModelFile/Dapertmens';
import { HospitalsModel } from 'src/app/ModelFile/HospitalsModel';
import { HospitalsSplicationsModel } from 'src/app/ModelFile/HospitalsSplicationsModel';
import { HospitalViewModel } from 'src/app/ModelFile/HospitalViewModel';
import { DapermentSService } from 'src/app/ServiceFile/DapermentService/DapermentS.service';
import { HospitalsServiceService } from 'src/app/ServiceFile/HospitalsService.service';


@Component({
  selector: 'app-view-all-dapertment',
  templateUrl: './view-all-dapertment.component.html',
  styleUrls: ['./view-all-dapertment.component.css']
})
export class ViewAllDapertmentComponent implements OnInit {

  hospitalsSplications1: HospitalsSplicationsModel[];
  arr:number[]=[];
  arrDaperment:Dapertmens[]= [];
  x:number=0;
  idHospitals:any
  hospitalInfo=new HospitalsModel()
  name="hospital"


  constructor(   private serviceHospital:HospitalsServiceService,
    private serviceDapertment:DapermentSService,private activeRout:ActivatedRoute) {}

  ngOnInit() {
    this.getId();
    this . getInfohospital();
    this. getHospitalDape();



  }

    // اخذ رقم المستشفي
    getId(){
      this.activeRout.paramMap.subscribe(param=>{
      this.  idHospitals=param.get('id')
        });
      }
      //ارجاع معلومات المستشفي
  getInfohospital(){
        this.serviceHospital.getHospitalId(this.idHospitals).subscribe((list:any)=>{
          this.hospitalInfo=list;
          // console.log(this.hospitalInfo)

          // this.name=this.hospitalInfo.hospitalUserNameAR
          // console.log("/////////////////////")

          console.log(this.name)

        },e=>{
          console.log(e.error)
        }
        );

      }
  // ارجاع اقسام جميع اقسام المستشفي
  getHospitalDape(){

    this.serviceHospital. getDapSplicationHospitalById( this.  idHospitals).subscribe((x:HospitalsSplicationsModel[])=>{
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

}
