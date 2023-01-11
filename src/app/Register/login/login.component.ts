import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServeRegisterService } from 'src/app/ServiceFile/serve-register.service';
import { Login } from 'src/app/ModelFile/login.model';
import { AuthonticationService } from 'src/app/Myservice/authontication.service';
import { AdminService } from 'src/app/Myservice/admin.service';
import { MyserviceService } from 'src/app/Myservice/myservice.service';

export class Arry{
 public id:number;
 public name:string;
}
export class User {
  public name: string;
  public email: string;
  public password: string;
  public hobbies: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  // orders = [];
  // title='nsm,hsjkhjk'

 loginModel=new Login();
  constructor(private formb: FormBuilder,
  public serviceLogin:MyserviceService,private auto:AuthonticationService,private servicee:AdminService,
    private router:Router) {
      // this.form = this.formBuilder.group({
      //   orders: ['']
      // });

      // this.orders = this.getOrders();
    }
    registar:Login;
message:string;
  ngOnInit(): void {
    this.registar={
      user_name:'',
      password:'',
      rememberMe:false
    
    }
  
    this.loginform=this.formb.group({
      user_name:['',Validators.required],
      password:['',Validators.required],
      rememberMe:false,
     });

  }

  Login1(){}
  // getOrders() {
  //   return [
  //     { id: 1, name: 'order 1' },
  //     { id: 2, name: 'order 2' },
  //     { id: 3, name: 'order 3' },
  //     { id: 4, name: 'order 4' }
  //   ];
  // }
// formp=new FormGroup({

//   firstName:new FormControl(),
//   firstName2:new FormControl(),
//   firstName3:new FormControl(),
//   firstName4:new FormControl(),
// });


  submit1(){
    if (this.loginform.valid) {
      this.ValidateModel();
      console.log(this.registar);
      this.serviceLogin.UserLogin(this.registar).subscribe(success => {
    
        const user= this.loginform.value.user_name;
 
        localStorage.setItem('user_name',this.loginform.value.user_name);
        localStorage.setItem('expire',this.loginform.value.rememberMe);
      this.auto .installStorage(false, user);
      this.router.navigate([ '/homepage',user]).then(x=> {window.location.reload()});

      }, err => {
       
       // this.message = err.error;
        console.log(err);
        this.message=this.registar.user_name;

        
      });
    }}
    changeSuit() {
      // this.form.get('orders').setValue(e.target.value.id, {
      //    onlySelf: true
      // })
    }
    // formloginnn=new FormGroup({
    //   namey:new FormControl('gshhg'),
    //   age:new FormControl('')
    // })
    // uonSubmit(){
    //  alert(this.formloginnn.value.namey)
    // }
    ValidateModel() {
      this.registar.user_name = this.loginform.value.user_name;
      this.registar.password = this.loginform.value.password;
     
      this.servicee.GetUserRolse().subscribe(success=>{
       
       
                  },err=>{
                    console.log(err);
                  })
    }

}
