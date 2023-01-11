import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/ModelFile/get-all-user.model';
import { RegisterM } from 'src/app/ModelFile/register-m.model';
import { ServeRegisterService } from 'src/app/ServiceFile/serve-register.service';

export class  posswordConfim{
  public   posswordConfim:string;

}
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  model=new RegisterM();
  model2=new posswordConfim();
  user :User [];

  constructor( private service:ServeRegisterService ,private rout:Router) { }
  message:string;

  
 public messagerVaiatider={
    userName:{
      required:'اسم المستخدم مطلوب',
      match:''

    },
    email:{
      required:'البريد الالكتروني مطلوب',
      notValid:'البريد الالكتروني غير صحيح',
      match:''

    },
    poss:{
      required:'كلمة المرو مطلوب',
      minlength:'الحد الادني لكلمة المرو 6 مقاطع'

    },

  }

  ngOnInit(): void {
    // this.model;
    this.model2.posswordConfim='';
    this.user=[];
    this.AllUser();
    this.message='';




  }
  onSubmit(){
  this.service.Register(this.model).subscribe(res=>{
      // alert(" ok");
      this.message="تم اضافة الحساب بنجاح وارسال رمز التفعيل الي ايميلك"
// this.model.userName='';
// this.model.email='';
// this.model.password='';
this.rout.navigate(['Login']);

// this.ngOnInit();
      // this.AllUser();
    },err=> {alert(err.error)
    });


  }
  isPasswordConfim(){
    if (this.model.password!==''&&this.model2.posswordConfim!=='') {
      if ((this.model.password!==this.model2.posswordConfim)&&( this.model.password.length>5&&this.model2.posswordConfim.length>5)){
        return true;
      }

    }
    return false;


  }
  AllUser(){
    this.service.getAllUser().subscribe((list: User[])=>{
      this.user=list;
      // console.log(this.user);
      // alert(this.user)
    },(err: { error: any; })=>{
      alert(err.error);
    });
  }
  //للتحقق من ان الاسم مستعمل
  isNameExit(){

    for(const name of this.user){
      if (name.userName===this.model.userName) {
        // console.log(this.model.userName)
       this.messagerVaiatider.userName.match='اسم المستخدم تم استخدامه';
        return true;
      }
    }
    return false;
}
//للتحقق من ان البريد مستعمل
  isEmailExit(){
    for(const email of this.user){
       if (email.email===this.model.email) {
       this.messagerVaiatider.email.match='البريد الالكتروني   تم استخدامه';

        return true; }

    }
    return false;

  }

}
