import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../ModelFile/login.model';
import { RegisterServiceService } from '../../ServiceFile/RegisterService.service';
import { AuthService } from '../../ServiceFile/serviceLogin/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(
    private fb:FormBuilder,
    private service: RegisterServiceService,
    private route: Router,
    private auth: AuthService
  ) { }

  message: string;
  loginForm: FormGroup;
  logModel: Login;

  messageValidate ={
    email: {
      required:' البريد الالكتروني مطلوب!',
    },
    password: {
      required:' كلمة المرور مطلوبة!',
    },
  };

  ngOnInit(): void {
    this.message= '';

    this.logModel ={
      email:'',
      password:'',
      rememberMe:false
    }


    //كود التعامل مع Validation الخاص بالمدخلات الموجودة في ال اتش تي ام ال
    this.loginForm=this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
      rememberMe: false
    });

  }

  Login(){
    if (this.loginForm.valid) {
      this.ValidateModel();
      console.log("kkk")
      this.service.UserLogin(this.logModel).subscribe(success => {
        const rem = !!this.loginForm.value.rememberMe;
        const email = this.loginForm.value.email;
        this.auth.installStorage(rem, email);
        this.route.navigate(['home']).then(x => {window.location.reload()});
      }, err => {
        console.log(err);
        this.message = err.error;
      });
    }
  }

  ValidateModel() {
    this.logModel.email = this.loginForm.value.email;
    this.logModel.password = this.loginForm.value.password;
    this.logModel.rememberMe = this.loginForm.value.rememberMe;
  }



}
