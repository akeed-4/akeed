import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { editUser } from 'src/app/model/editeUser';
import { UserModel } from 'src/app/model/UserModel';
import { Users } from 'src/app/model/users';
import { AdminService } from 'src/app/Myservice/admin.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  userData!:Users;
  isTest!:boolean;
  editUser!:editUser;
  Id!:any;
   titel!:string;
   btnTitle!:string;
   registaration!:FormGroup;
   message1!:string;
   rigst!:UserModel;
     reg!:RegExp;
     user!:Users[];
     isbusy!:boolean;
     errorMes!:string;
     messageshow={
       userName:{
         required:'اسم المستخدم مطلوب ',
         notValid:'    ',
         mathName:'الاسم مستخدم باالفعل '
       },
       email:{
         required:'البريد الالكتروني مطلوب',
         notValid:'ادخل البريد الالكتروني بشكل صحيح',
         mathEmail1:'الايميل مستخدم بالفعل'
       },
       password:{
         notMatch:'كلمه المرور يجب ان تحتوي على حروف',
         MathUserName:'',
         MathEmail:'',
       }}
   constructor(private ff:FormBuilder,
    private service:AdminService,private Activerot:ActivatedRoute) { }

   ngOnInit(): void {
     this.rigst={

       userName:'',
       email:'',
       password:'',
       phoneNumber:'',
       emailconfirm:false,
       passwordconfirm:''



     }
     this.registaration=this.ff.group({
       userName:['',Validators.required],
       email:['',[Validators.required,Validators.email]],

       password:['',[Validators.required,Validators.minLength(6)]],
       passwordconfirm:['',[Validators.required,Validators.minLength(6)]],
       emailconfirm:false,

       phoneNumber:'',

     })
     this.isTest=false;
     this.userData!=null;
     this.titel='اضافه مستخدم جديد';
     this.btnTitle='اضافه مستخدم'
     this.errorMes='';
     this.isbusy=false;
       this. Id=null;
     //this.Alluser();
     this.user=[];
     this.message1;
     this.editUser={
       id:'',
     userName:'',
     email:'',
     emailconfirm:false,
     password:'',
     phoneNumber:'',
     passwordconfirm:'',

     }
     this.registaration.valueChanges.subscribe(sss=>{
       if(this.registaration.status=='VALID'){
     console.log("form valid");

         this.isbusy=true;
       }
     },err=>{
       console.log(err);
     })
     this.GetAllusers();
     this.Activerot.paramMap.subscribe(param=>{
       var id=param.get('id');
       if(id){

         this.service.Getuseres(id).subscribe(succss=>{
 this.userData=succss;
 this.titel='  تعديل بيانات مستخدم';
     this.btnTitle=' تعديل وحفظ';
     this.AdduserData();
     this.Id=id;
     this.isTest=true;
         },err=>{console.log(err.error)})
       }
     })
   }
   AdduserData() {
   if(this.userData!==null){

     this.registaration.setValue({
       userName:this.userData.userName,
       email:this.userData.email,

       password:this.userData.passwordHash,
 passwordconfirm:this.userData.passwordHash,
       emailconfirm:this.userData.emailConfirmed,

       phoneNumber:this.userData.phoneNumber,

     })
     console.log("eroorr");
   }



   }
   Addusers(){
     if(this.registaration.valid){
       if(!this.isTest){
         this.rigst.userName=this.registaration.value.userName;
         this.rigst.email=this.registaration.value.email;
         this.rigst.password=this.registaration.value.password;
         this.rigst.passwordconfirm=this.registaration.value.passwordconfirm;
         this.rigst.phoneNumber=this.registaration.value.phoneNumber;
         this.rigst.emailconfirm=this.registaration.value.emailconfirm;
         this.service.AddnewUsrs(this.rigst).subscribe(success=>{
           this.ngOnInit();
           this.message1='تم اضافه المستخدم بنجاح';
         },err=>{
           console.log(this.errorMes=err);
         });


       }
     else{
 this.editUser.id=this.Id;
 this.editUser.userName=this.registaration.value.userName;
 this.editUser.email=this.registaration.value.email ;
 this.editUser.password=this.registaration.value.password;
 this.editUser.passwordconfirm=this.registaration.value.passwordconfirm;
 this.editUser.phoneNumber=this.registaration.value.phoneNumber;
 this.editUser.emailconfirm=this.registaration.value.emailConfirmed;
 this.service.editUserNe(this.editUser).subscribe(xxx=>{
   this.message1='تم تعديل البيانات بنجاح';

 },err=>{console.log(err)})
     }
   }

 }


   ValditData(){
     }
   ispasswordvalid(){
     if(this.registaration.value.password !=='' && this.registaration.value.passwordconfirm !==''){
       if(this.registaration.value.password !==this.registaration.value.passwordconfirm)
      {
         return true;
       }

     }
 return false;
   }
   ispasswordvalid1(){
   const pass=this.registaration.value.password;
   if(pass!==''){
     this.reg=new RegExp('[a-z]');
     if(!this.reg.test(pass)){
       this.messageshow.password.notMatch="كلمه المرور يجب ان تحتوي على حروف صغيره";
       return false;
    }

    this.reg=new RegExp('[A-Z]');
    if(!this.reg.test(pass)){
     this.messageshow.password.notMatch="كلمه المرور يجب ان تحتوي على حروف كبيره";
      return false;

    }
    this.reg=new RegExp('[~!#$%^&*()_+{}]');
    if(!this.reg.test(pass)){
     this.messageshow.password.notMatch="كلمه المرور يجب ان تحتوي على حروف مميزه";
      return false;
   }
   this.reg=new RegExp('[0-9]');
   if(!this.reg.test(pass)){

    if(!this.reg.test(pass)){
     this.messageshow.password.notMatch="كلمه المرور يجب ان تحتوي على ارقام ";
      return false;
   }
   }


 }
 return true;
 }

 Alluser(){
   this.service.GetAllUsers().subscribe(list=>{
     this.user=list;
     console.log(this.user);
   },
   err=>alert(err.error));





 }
 isNameExist(){
 const name=this.registaration.value.userName;
 if(name!==null&&name!==''){
   for(const users of this.user.values()){
     if(users.userName===name&&!this.isTest){
     return true;
   }
   else if(this.isTest&&users.userName===name&&users.id!==this.userData.id)
 return true;
 }
 }
 return false;

 }
 isEmailExist(){
   const email=this.registaration.value.email;
   if(email!=null&&email!=''){
     for(const users of this.user.values()){
       if(users.email==email&&!this.isTest) {
       return true;
     }
     else if(this.isTest&&users.email===email&&users.id!==this.userData.id)
 return true;
   }
   }
   return false;

   }



   GetAllusers(){
     this.service.GetAllUsers().subscribe((list)=>{
       this.user=list;

     },
     err=>{
       console.log(err);
     }
     )
   }
   }


