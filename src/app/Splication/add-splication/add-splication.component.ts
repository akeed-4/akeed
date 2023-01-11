import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Console } from 'console';
import { Dapertmens } from 'src/app/ModelFile/Dapertmens';
import { Specialties } from 'src/app/ModelFile/Specialties';

import { DapermentSService } from 'src/app/ServiceFile/DapermentService/DapermentS.service';

@Component({
  selector: 'app-add-splication',
  templateUrl: './add-splication.component.html',
  styleUrls: ['./add-splication.component.css']
})
export class AddSplicationComponent implements OnInit {

  allDepertment:Dapertmens[];
  allSplication:Specialties[];
  addSpliction=new Specialties();
  addSpliction2=new Specialties();
  constructor(private service:DapermentSService, private fB:FormBuilder) { }
  splicationGrop:FormGroup;
  splicationGrop2:FormGroup;
  da=new Specialties();

  ngOnInit(): void {

    this.allDepertment=[];
    this.allSplication=[];
    // this.addSpliction=[];
    this.viewAllDepertment();
    this.splicationGrop=this.fB.group({
      splicationName:'',
      dapertmentId:0
    })
    this.splicationGrop2=this.fB.group({
      splicationName:'',
      dapertmentId:0
    })

  }
  viewAllDepertment(){
    this.service.getAllUser().subscribe((list: Dapertmens[])=>{
      this.allDepertment=list;



    },(err: { error: any; })=>{
    console.log(err.error);
    });

  }

  addSplication(formData:any) {

    this.addSpliction2.splicationName=formData.value.splicationName;

    this.addSpliction2.dapertmentId= formData.value.dapertmentId;

    console.log(this.addSpliction)
    this.service.addSplicton(this.addSpliction2).subscribe(x=>{
      alert("ok")
    this.ngOnInit();

    },ex => console.log(ex))


    // this.da.id=this.addSpliction.dapertmentId;
    // this.service.updateDaperment(this.da,this.addSpliction.dapertmentId).subscribe(x=>{
    //   alert("ok")


    // },ex => console.log(ex))
  }
  changeWebsite(e:any){

// حذف قسم
    // console.log(this.splicationGrop.value.dapertmentId)
    // this.service.deleteDaperment(this.splicationGrop.value.dapertmentId).subscribe(x=>{
    //   alert("ok");
    // },(ex: any) => console.log(ex)
    // );
    // this.da.splicationName==this.splicationGrop.value.dapertmentName;


    this.service.getSplictionD(this.splicationGrop.value.dapertmentId).subscribe(x=>{

      this.addSpliction=x;
      console.log(this.addSpliction)
      console.log(e);
    },(ex: any) => console.log(ex));
    // this.service.getAllSplication().subscribe((list: Dapertmens[])=>{
    //   this.allSplication=list;
    //   console.log(this.allSplication)
    //   for(var  i  of this.allSplication ){
    //     // console.log("hhh")
    //     if(i.dapertmentId==this.splicationGrop.value.dapertmentId){
    //       // console.log("hhh")
    //       this.addSpliction=i;

    //       // this.addSpliction.id=i.id;
    //       // this.addSpliction.splicationName=i.splicationName;
    //       // this.addSpliction.dapertmentId=i.dapertmentId;


    //     }


    //   }
    //   console.log(this.addSpliction)

    // },(err: { error: any; })=>{
    // console.log(err.error);
    // });

    // if(this.allSplication.value.dapertmentId==this.splicationGrop.value.dapertmentId)
    // {
    //   console.log("jhh")
    // }



  }
}


