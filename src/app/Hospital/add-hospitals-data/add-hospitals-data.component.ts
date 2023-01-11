import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalsModel } from 'src/app/ModelFile/HospitalsModel';
import { HospitalsServiceService } from 'src/app/ServiceFile/HospitalsService.service';

@Component({
  selector: 'app-add-hospitals-data',
  templateUrl: './add-hospitals-data.component.html',
  styleUrls: ['./add-hospitals-data.component.css']
})
export class AddHospitalsDataComponent implements OnInit {
  registaration!:FormGroup;
  message1!:string;

  registar=new HospitalsModel();
  registar1=new HospitalsModel();
    reg!:RegExp;

    message:string;
    img!:File;
    isbusy:boolean;
    fileToUpload:File ;
    messageshow={

      email:{
        required:'البريد الالكتروني',
        notValid:'ادخل البريد الالكتروني بشكل صحيح',
        mathEmail1:''
      },
      password:{
        notMatch:'كلمه المرور يجب ان تحتوي على حروف',
        MathUserName:'',
        MathEmail:'',
      }}
      imageUrl: string = "assets/imgs/sf.jpg";


  constructor(private ff:FormBuilder,private service:HospitalsServiceService) { }

  ngOnInit(): void {
    this.registar={
      id:0,
      hospitalUserNameAR:'',
      hospitalEmail:'',
      hospitalPhone:'',
      hospitalImage:'',
      hospitalLogc:'',
      hospitalLocation:'',
      hospitalType:'',
      hospitalInformation:'',
      datejoining:new Date()


    }

    this.registaration = this.ff.group({
      hospitalUserNameAR: ['', Validators.required],
      hospitalEmail: ['', [Validators.required, Validators.email]],
      hospitalPhone: ['', [Validators.required, Validators.minLength(9)]],
      hospitalImage: ['', Validators.required],
      hospitalLocation: ['', Validators.required],
      hospitalType: ['', Validators.required],
      hospitalInformation: ['', Validators.required],

    });
    this.message="";

  }



  RegistDoctor(){
    console.log("hhh")

    this.registar.hospitalUserNameAR=this.registaration.value.hospitalUserNameAR;
    this.registar.hospitalEmail=this.registaration.value.hospitalEmail;
    this.registar.hospitalPhone=this.registaration.value.hospitalPhone;
    this.registar.hospitalImage=this.registaration.value.hospitalImage;
    this.registar.hospitalLocation=this.registaration.value.hospitalLocation;
    this.registar.hospitalLogc="dd.png";
    this.registar.hospitalType=this.registaration.value.hospitalType;
    this.registar.hospitalInformation=this.registaration.value.hospitalInformation;
    this.registar.datejoining=new Date(2020/2/1);

 this.service.AddDataHospital(this.registar).subscribe(sucess=>{
      this.registar1=sucess;

      console.log(this.registar);
      alert("ok")

      this.message='تم اضافة المستخدم الجديد بنجاح';
    }, ex=> {
      console.log(ex);
    })

}

}
