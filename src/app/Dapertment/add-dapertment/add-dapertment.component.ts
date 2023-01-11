import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dapertmens } from 'src/app/ModelFile/Dapertmens';


import { DapermentSService } from 'src/app/ServiceFile/DapermentService/DapermentS.service';

@Component({
  selector: 'app-add-dapertment',
  templateUrl: './add-dapertment.component.html',
  styleUrls: ['./add-dapertment.component.css']
})
export class AddDapertmentComponent implements OnInit {

  constructor( private service:DapermentSService,
    private fb:FormBuilder) { }
    add:FormGroup;
  daper:Dapertmens[];
  da=new Dapertmens();

  ngOnInit(): void {
    this.add=this.fb.group({
     id:0,
    name:''
    })
    this.daper=[];
    console.log("yy")
    this.service.getAllUser().subscribe((list: Dapertmens[])=>{
      this.daper=list;

      console.log(this.daper);
      console.log("yy")

    },(err: { error: any; })=>{
    console.log(err.error);
    });

  }
 addDeper(){
   console.log(this.da);

    // this.da.id=this.add.setValue.;
    this.service.Register(this.da).subscribe(res=>{
        alert(" ok");

  // this.model.userName='';
  // this.model.email='';
  // this.model.password='';


  // this.ngOnInit();
        // this.AllUser();
      },err=> {alert(err.error)
      });


    }

}
