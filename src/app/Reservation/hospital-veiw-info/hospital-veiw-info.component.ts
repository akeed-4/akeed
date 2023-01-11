import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalsModel } from 'src/app/ModelFile/HospitalsModel';
import { HospitalsServiceService } from 'src/app/ServiceFile/HospitalsService.service';

@Component({
  selector: 'app-hospital-veiw-info',
  templateUrl: './hospital-veiw-info.component.html',
  styleUrls: ['./hospital-veiw-info.component.css']
})
export class HospitalVeiwInfoComponent implements OnInit {
 title="صنعاء - شارع تعز"
 name="hospital"
 typehospital="type"
 idHospitals:any;
hospitalInfo=new HospitalsModel();
  constructor(private rout:Router, private  activeRout:ActivatedRoute,
    private serviceHospital:HospitalsServiceService) { }

  ngOnInit(): void {
    this.getId();
// console.log(this.idHospitals)
this.getInfohospital();
// console.log(this.hospitalInfo)
  }
  viewAllDoctor(){
    // this.rout.navigate(['ViewAllDoctor']);
    this.rout.navigate(['ViewAllDoctor',this.idHospitals]);

  }
  viewBlogs(){
    this.rout.navigate(['ViewBlog']);
  }
  viewAllDapertment(){
    this.rout.navigate(['ViewAllDapertment' ,this.idHospitals]);

  }
  // اخذ رقم المستشفي
  getId(){
    this.activeRout.paramMap.subscribe(param=>{
    this.  idHospitals=param.get('id')
        // console.log( this.  idHospitals);
      });
    }

getInfohospital(){
  this.serviceHospital.getHospitalId(this.idHospitals).subscribe((list:any)=>{
    this.hospitalInfo=list;
    console.log(this.hospitalInfo)
    this.title=this.hospitalInfo.hospitalLocation
    this.name=this.hospitalInfo.hospitalUserNameAR
    this.typehospital=this.hospitalInfo.hospitalType
  },e=>{
    console.log(e.error)
  }
  );

}
 onClickBooking(){
 this.rout.navigate(['HospitalBookingInfoTwo',this.idHospitals]);



      }

}
