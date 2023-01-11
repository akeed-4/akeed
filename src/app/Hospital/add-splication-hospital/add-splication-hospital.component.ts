import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SplicationsComponent } from 'src/app/Doctor/Splications/Splications.component';
import { Dapertmens } from 'src/app/ModelFile/Dapertmens';
import { HospitalSplic } from 'src/app/ModelFile/HospitalSplic';
import { Specialties } from 'src/app/ModelFile/Specialties';
import { DapermentSService } from 'src/app/ServiceFile/DapermentService/DapermentS.service';

@Component({
  selector: 'app-add-splication-hospital',
  templateUrl: './add-splication-hospital.component.html',
  styleUrls: ['./add-splication-hospital.component.css']
})

export class AddSplicationHospitalComponent implements OnInit {
  selectedDevice:string
  allDepertment:Dapertmens[];
  adherant:Dapertmens []
  nameDap:string
  allSplication: Specialties [];
  addHospiltalSdd=new HospitalSplic();
  constructor(private service:DapermentSService, private fB:FormBuilder) { }
  HospiltalSGrop:FormGroup;
  arr:FormArray;
   arrJ=["a","b","c"]

    products: Dapertmens[] = [];
  ngOnInit(): void {

for (var i=1; i<3;i++){
  this.service.getDaperment(i).subscribe((list:any)=>{
    this.products.push(list);


  })

}
console.log(this.products)

//150501653
    this.allDepertment=[];
    this.HospiltalSGrop=this.fB.group({
      hospitalsId:0,
      specialtiesId:0,
      dapertmentId:0

    });

    // this.arr=this.fB.array({
    //   dapertmentId:0,

    // });
    // this.arr=[id,]
    this.viewAllDepertment();

  }

  viewAllDepertment(){
    this.service.getAllUser().subscribe((list: Dapertmens[])=>{
      this.allDepertment=list;



    },(err: { error: any; })=>{
    console.log(err.error);
    });

  }

  changeWebsite(e:any){
    // this.HospiltalSGrop.get('name').
// console.log(this.selectedDevice)
    this.service.getSplictionD2(this.HospiltalSGrop.value.dapertmentId).subscribe((list:Specialties[])=>{

      this.allSplication=list;
      // console.log(this.allSplication)
      // console.log(e);
    },(ex: any) => console.log(ex));
      }
  addHospiltalS(){
    this.addHospiltalSdd.hospitalsId=1;
    this.addHospiltalSdd.dapertmentId=this.HospiltalSGrop.value.dapertmentId;
    this.addHospiltalSdd.specialtiesId=this.HospiltalSGrop.value.specialtiesId;
    console.log(this.addHospiltalSdd);
    this.service.addHosptialSplicton(this.addHospiltalSdd).subscribe(x=>{
      alert("ok");
    },(err: { error: any; })=>{
      // console.log(err.error);
      if(err.error=='التخصص موجود مسبقا'){
        alert('التخصص موجود مسبقا');

      }
      });
    //  this.HospiltalSGrop.value.dapertmentId
      }

}
function list(list: any, arg1: any) {
  throw new Error('Function not implemented.');
}

