import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/ModelFile/login.model';
import { RegisterServiceService } from 'src/app/ServiceFile/RegisterService.service';
import { AuthService } from 'src/app/ServiceFile/serviceLogin/auth.service';
import { CryptService } from 'src/app/ServiceFile/serviceLogin/crypt.service';

@Component({
  selector: 'app-login-app-user',
  templateUrl: './login-app-user.component.html',
  styleUrls: ['./login-app-user.component.css']
})
export class LoginAppUserComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private service: RegisterServiceService,
    private route: Router,
    private auth: AuthService,
    private serviceCrt:CryptService
  ) { }

  message: string;
  loginForm: FormGroup;
  logModel: Login;
  id:string

  messageValidate ={
    user_name  : {
      required:' اسم المستخدم  مطلوب!',
    },
    password: {
      required:' كلمة المرور مطلوبة!',
    },
  };

  ngOnInit(): void {
    this.message= '';

    this.logModel ={
      user_name:'',
      password:'',
      rememberMe:false
  
    }


    //كود التعامل مع Validation الخاص بالمدخلات الموجودة في ال اتش تي ام ال
    this.loginForm=this.fb.group({
      user_name:['', Validators.required],
      password:['', Validators.required],
   
    });

  }

  Login(){
    if (this.loginForm.valid) {
      this.ValidateModel();

      this.service.UserLogin(this.logModel).subscribe(success => {

        const user= this.loginForm.value.user_name;
   
          localStorage.setItem('email',this.loginForm.value.user_name);
          localStorage.setItem('expire',"false");
        this.auth .installStorage(false, user);
        
        // this.id=this.serviceCrt.Decrypt(localStorage.getItem('id')||'{}')
        this.route.navigate(['Home']).then(x => {window.location.reload()});
        
      }, err => {
        console.log(err);
        this.message = err.error;
        
      });
    }
  }

  ValidateModel() {
    this.logModel.user_name = this.loginForm.value.user_name;
    this.logModel.password = this.loginForm.value.password;
   
  }



}



