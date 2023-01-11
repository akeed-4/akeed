import { SplitInterpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { Splications } from 'src/app/ModelFile/Splications';


@Component({
  selector: 'app-Splications',
  templateUrl: './Splications.component.html',
  styleUrls: ['./Splications.component.scss']
})
export class SplicationsComponent implements OnInit {
// sp=new Splications();
// sp4 = new Splications();

  constructor() { }

  ngOnInit() {

    // this.service.getSplication().subscribe(x=>{
    //   this.sp4= x as any;
    //   console.log(this.sp4)
    // })


  }
  ngSumbit(){
    // this.service.postSp(this.sp).subscribe(res=>{
    //   alert("تم الاضافه بنجاح")
    // },err=>{
    //   alert(err.error)
    // });

  }
}
