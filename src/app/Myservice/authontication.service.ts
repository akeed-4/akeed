import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';
import { Observable } from 'rxjs';
import { Users } from '../model/users';
import { MyserviceService } from './myservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {


  private baseUrl = "http://app.eofficewebapp.com";
  email !: string;
  expire !: string;
  role !: string;
  id:string

  constructor(private http: HttpClient, private service: CryptoService) {


    if (this.isUserRegistered()) {
      // this.id=this.service.Decrypt(localStorage.getItem('id')||'{}')
      this.expire = this.service.Decrypt(localStorage.getItem('expire')|| '{}');

      this.email = this.service.Decrypt(localStorage.getItem('email') || '{}');
     // this.role = this.service.Decrypt(localStorage.getItem('role')|| '{}');//|| '{}'
    }
  }

  headers={
    headers: new HttpHeaders({

      'Content-Type':'application/json',
    }),
    withCredentials: true,
  };

  //كود البقاء على تسجيل الخول نسبة الى ضغط ذكرني

  installStorage(rem: boolean, email: string) {
    const day = new Date();
    if (rem) {
      day.setDate(day.getDate() + 10);
    } else {
      day.setMinutes(day.getMinutes() + 30);
    }
    localStorage.setItem('email',this.service.Encrypt(email));
    localStorage.setItem('expire', this.service.Encrypt(day.toString()));


    this.GetRoleName(email).subscribe(
      (success) => {
console.log(success)
        localStorage.setItem('role',success);
console.log(success);
      },
      (err) => {


        alert("jbldjf")
      }
    );

  }

  showRole(){
    if(this.role==''){
this.GetRoleName(this.email);
    }
  }

  //دالة حساب وقت البقاء على تسجيل الدخول على حسب ضغط المستخدم زر ذكرني ام لا
  IsExpiredDate(day: string) {

    const dateNow = new Date();
    const dateExpire = new Date(Date.parse(day));
    if (dateExpire < dateNow) {
      return true;
    }
    return false;
  }
  

  // تتحقق هل المفاتيح موجوده والا مش موجوده
  isUserRegistered(){
    const email= !!localStorage.getItem('email');
    const exp= !!localStorage.getItem('expire');
    const role = !!localStorage.getItem('role');


    if (email && role && exp ) {
      return true;
    }
    return false;
  }
  GetRoleName(email: string) {

    return this.http.get(this.baseUrl+'GetRoleName/' + email, {responseType: 'text',  }).pipe();
  }

  // دالة تستدعي  الدالة التي تقارن بين بيانات المستخدم التي تم ادخالها وفك تشفيرها مع القيم التي محتفظ بها الكوكيز هل يتساووين

  ValidateUser(email: string, role: string) {
    return this.http.get('http://localhost:12990/CheckUserClaim/' + email + '&' + role,  { withCredentials: true }).pipe();
  }
}
