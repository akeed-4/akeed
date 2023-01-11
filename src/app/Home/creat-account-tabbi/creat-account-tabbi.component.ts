import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegsterDoctor } from 'src/app/model/RegistarDoctors';
import { RsgsterHosptalModel } from 'src/app/model/RegistarHospital';
import { Rigestar } from 'src/app/model/registarModel.model';
import { RoleModel } from 'src/app/model/RoleModels';
import { Specialties } from 'src/app/ModelFile/Specialties';
import { AdminService } from 'src/app/Myservice/admin.service';
import { MyserviceService } from 'src/app/Myservice/myservice.service';
import { DapermentSService } from 'src/app/ServiceFile/DapermentService/DapermentS.service';

@Component({
  selector: 'app-creat-account-tabbi',
  templateUrl: './creat-account-tabbi.component.html',
  styleUrls: ['./creat-account-tabbi.component.css']
})
export class CreatAccountTabbiComponent implements OnInit {
// prviet
allSplication: Specialties [];
  constructor( private fb: FormBuilder,
    private service: MyserviceService,
    private service1: AdminService,private route:Router,
    private servicSplication:DapermentSService) { }
  roles!:RoleModel[];
  userForm!: FormGroup;
  userForm1!: FormGroup;
  userFormHosptal!: FormGroup;

  reg!: Rigestar;
  regDoctor!: RegsterDoctor;
  regHospital!: RsgsterHosptalModel;

  regex!: RegExp;
  isbusy!: boolean;
  message!: string;
  showReDoctor!:boolean;
  showReUser!:boolean;
  showHos!:boolean;
sRoleName!:string;
  messageValidate = {
    userName: {
      required: 'يرجى ادخال اسم المستخدم',
      matchUserName: '',
    },
    email: {
      required: 'يرجى ادخال البريد الالكتروني',
      notValid: 'ادخل البريد الالكتروني بشكل صحيح',
      matchEmail: '',
    },
    pass: {
      required: 'يرجى ادخال كلمة المرور',
      minLength: ' الحد الادنى لكلمة المرور هو 6 مقاطع',
      notMatch: 'يجب ان تحتوي كلمة المرور على احرف صغيرة وكبيرة وارقام ورموز',
    },
    passConfig: {
      required: 'يرجى تأكيد كلمة المرور',
      minLength: ' الحد الادنى لكلمة المرور هو 6 مقاطع',
      isMatch: 'كلمتا المرور غير متطابقتين',
    },
  };

  ngOnInit() {
    this. getSplication()

    this.sRoleName="User"
    this.showReDoctor=false;
    this.showReUser=true;
    this.isbusy=false;
    this.message = '';
    this.reg = {
      userName: '',
      email: '',
      password: '',
      typeRole:'',
      emailConfirmed:false,
      phoneNumber :'',
      userNameArabic:''
    };
    this.regHospital = {
      hospitalId:0,
      hospitalUserNameAR  : '',
      hospitalEmail: '',
      password: '',
      hospitalLocation:'',
      hospitalName:'',
      hospitalPhone:'',
      hospitalType:''
    };
    this.regDoctor = {
      doctorUserName:'',
      doctorNameAraic:'',
      doctorEmail:'',
    doctorLocation:'',
      password:'',
      doctorPhone:'',
      specialtiesId:0


    };


    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', Validators.required],
      userNameArabic: ['', Validators.required],

    });
this.userForm1=this.fb.group({
  doctorUserName: ['', Validators.required],
  doctorEmail: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
  doctorPhone: ['', Validators.required],
  doctorLocation:['',Validators.required],
  doctorNameAraic:['',Validators.required],
  specialtiesId:0


})
this.userFormHosptal = this.fb.group({
  hospitalUserNameAR: ['', Validators.required],
  hospitalEmail: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
  hospitalLocation:['', [Validators.required]],
  hospitalPhone:['', [Validators.required]],
  hospitalName:['', [Validators.required]],
  hospitalType:''
})
this.userForm.valueChanges.subscribe(
    x => {
        if (this.userForm.status == 'VALID') {
          this.isbusy = true;
        }
      },
      ex => console.log(ex)
    );


  }


 getSplication(){
   this.servicSplication.getAllSplication().subscribe((x:any)=>{
this.allSplication=x;
console.log(this.allSplication)
   },(e: { error: any; })=>{
     console.log(e.error)
   }
   )
 }
  register() {

    if (this.userForm.valid) {
      this.validateRegisterModel();
      this.service.Register(this.reg).subscribe(
        succes => {
          this.message =
            'تم إضافة حسابك بنجاح,,,الرجاء التحقق من رسالة التحقق المرسله الى بريدك هذا';
            this.route.navigate(['Logins']).then(x=> {window.location.reload()});
          this.userForm.reset();

          this.userForm.value.password = '';
        },
        err => alert(err.error)
      );
    }



}

  validateRegisterModel() {

    this.reg.userName = this.userForm.value.userName;
    this.reg.userNameArabic = this.userForm.value.userNameArabic;
    this.reg.email = this.userForm.value.email;
    this.reg.password = this.userForm.value.password;
    this.reg.typeRole=this.sRoleName;
    this.reg.emailConfirmed=true;
    this.reg.phoneNumber = this.userForm.value.phoneNumber;
    console.log(this.reg)
  }
  registerHosptal(){
    if (this.userFormHosptal.valid) {
      this.validRigsterModelHosptal();
      this.service.RegisterHospital(this.regHospital).subscribe(
        succes => {
          this.message =
            'تم إضافة حسابك بنجاح,,,الرجاء التحقق من رسالة التحقق المرسله الى بريدك هذا';
            this.route.navigate(['Logins']).then(x=> {window.location.reload()});
          this.userForm.reset();

          this.userForm.value.password = '';
        },
        err => alert(err.error)
      );
    }

  }
  validRigsterModelHosptal(){
    this.regHospital.hospitalUserNameAR = this.userFormHosptal.value.hospitalUserNameAR;
    this.regHospital.hospitalEmail = this.userFormHosptal.value.hospitalEmail;
    this.regHospital.password = this.userFormHosptal.value.password;
    this.regHospital.hospitalLocation = this.userFormHosptal.value.hospitalLocation;
    this.regHospital.hospitalName = this.userFormHosptal.value.hospitalName;

    this.regHospital.hospitalPhone = this.userFormHosptal.value.hospitalPhone;
    // this.regHospital.hospitalType
    if(this.userFormHosptal.value.hospitalType==1){
      this.regHospital.hospitalType="مستشفي عام"
    }
    if(this.userFormHosptal.value.hospitalType==2){
      this.regHospital.hospitalType="مستشفي خاص"
    }
    if(this.userFormHosptal.value.hospitalType==3){
      this.regHospital.hospitalType=" عيادة"
    }

  }
  changeSpecialtie(e:any){
    // this.userForm1.value.specialtiesId=e.
    console.log(this.userForm1.value.specialtiesId)

  }
  registerDoctor(){
      this.validRigsterModelDoctor();
      this.service.RegisterDoctor(this.regDoctor).subscribe(
        succes => {
          this.message =
            'تم إضافة حسابك بنجاح,,,الرجاء التحقق من رسالة التحقق المرسله الى بريدك هذا';
            this.route.navigate(['Logins']).then(x=> {window.location.reload()});

          this.userForm.reset();

          this.userForm.value.password = '';
        },
        err => console.log(err)
      );



  }

  validRigsterModelDoctor(){

  this.regDoctor.doctorUserName = this.userForm1.value.doctorUserName;
  this.regDoctor.doctorPhone = this.userForm1.value.doctorPhone;;

  this.regDoctor.doctorNameAraic=this.userForm1.value.doctorNameAraic;

  this.regDoctor.doctorEmail=this.userForm1.value.doctorEmail;
  this.regDoctor.password=this.userForm1.value.password;
  this.regDoctor.doctorLocation=this.userForm1.value.doctorLocation;
  this.regDoctor.specialtiesId=this.userForm1.value.specialtiesId;


}
  isPasswordMatch() {
    if (
      this.userForm.value.password !== '' &&
      this.userForm.value.passwordConfirm !== ''
    ) {
      if ((this.userForm.value.password !== this.userForm.value.passwordConfirm) &&
        this.userForm.value.password.length > 5 &&
        this.userForm.value.passwordConfirm.length > 5
      ) {
        return true;
      }
    }
    return false;
  }


  isPasswordValid() {
    const pass = this.userForm.value.password;
    if (pass !== '' && pass.length > 5) {
      this.regex = new RegExp('[a-z]');
      if (!this.regex.test(pass)) {
        this.messageValidate.pass.notMatch =
          'يجب ان تحتوي كلمة المرور على احد الاحرف الصغيره على الاقل';

        return false;
      }

      this.regex = new RegExp('[A-Z]');
      if (!this.regex.test(pass)) {
        this.messageValidate.pass.notMatch =
          'يجب ان تحتوي كلمة المرور على احد الاحرف الكبيره على الاقل';

        return false;
      }

      this.regex = new RegExp('[~!@#$%^&*()_+<>{}]');
      if (!this.regex.test(pass)) {
        this.messageValidate.pass.notMatch =
          'يجب ان تحتوي كلمة المرور على احد رمز  على الاقل';

        return false;
      }

      this.regex = new RegExp('[0-9]');
      if (!this.regex.test(pass)) {
        this.messageValidate.pass.notMatch =
          'يجب ان تحتوي كلمة المرور على احد رقم على الاقل';

        return false;
      }
    }
    return true;
  }

  // isUserNameExist() {
  //   const name = this.userForm.value.userName;
  //   if (name != null && name != '' && this.isbusy === false ) {
  //     this.service.UserNameExist(name).subscribe(
  //       (x) => {
  //         // console.log('name exits');

  //         this.messageValidate.userName.matchUserName =
  //           'عذرا... اسم المستخدم هذا تم استخدامه ';
  //       },
  //       (ex) => console.log(ex)
  //     );

  //     return true;
  //   }else {
  //     this.messageValidate.userName.matchUserName== null;
  //     // ='';

  //   }
  //   return false;
  // }

  // isEmailExist() {
  //   const email = this.userForm.value.email;
  //   if (email != null && email != '' && this.isbusy === false) {
  //     this.service.UserEmailExist(email).subscribe(
  //       (x) => {
  //         // console.log('email exits');

  //         this.messageValidate.email.matchEmail =
  //           ' عذرا ...البريد الالكتروني هذا تم استخدامه  ';
  //       },
  //       (ex) => console.log(ex)
  //     );

  //     return true;
  //   }else {
  //     this.messageValidate.email.matchEmail== null;
  //           // ='';


  //   }
  //   return false;
  // }  roleId!: string;

  // onRolesChange(){

  //   this.service1.GetAllRoles().subscribe(s => {
  //     this.roles = s;
  //     this.roles.splice(1,1);
  //   },err=>console.log(err)
  //   );

  // }

    AddUserData() {
      this.userForm.setValue({
        roleName: this.userForm.value.roleName
      })
    }




showdoc() : boolean{
  this.showReUser=false;
  this.sRoleName="Doctor";
  this.showHos=false;
  return     this.showReDoctor=true;
}

showUser(): boolean{
  this.showReDoctor=false;
  this.showHos=false;
  this.sRoleName="User"
  return     this.showReUser=true;
}






showhospi():boolean{
  this.showReDoctor=false;
  this.showReUser=false;
  this.sRoleName="Hospital"

  return this.showHos=true;

}
valdtateData(){
  if(this.userForm.value.userName==''&&this.userForm.value.email==''&&this.userForm.value.password==''&&
  this.userForm.value.passwordConfirm==''){
    return false;
  }
  return true;
}
}
