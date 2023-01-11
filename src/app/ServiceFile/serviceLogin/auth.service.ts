import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptService } from './crypt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string;
  expire: string;
  role: string;
  id:string;
  idT:string

  constructor(
    private http: HttpClient,
    private service: CryptService
  ) {
    if (this.isUserRegistered()){
      this.email = this.service.Decrypt(localStorage.getItem('email'));
      this.expire = this.service.Decrypt(localStorage.getItem('expire'));
      this.role = this.service.Decrypt(localStorage.getItem('role'));
    }
  }

  installStorage(rem: boolean, email: string){
    const day = new Date();
    if (rem) {
      day.setDate(day.getDate() +10);
    }else {
      day.setMinutes(day.getMinutes() +30);
    }

    localStorage.setItem('email', this.service.Encrypt(email));
    localStorage.setItem('expire', this.service.Encrypt(day.toString()));

    this.GetRoleName(email).subscribe(success => {
      localStorage.setItem('role', this.service.Encrypt(success));
    }, er => console.log(er));
    //ارجاع رقم المستخدم مشفر
    // this.GetIdUser(email).subscribe(success => {
    //  this.idT=success
    //  console.log(this.idT)
    // }, er => console.log(er));
  }


  IsExpiredDate(day: string) {
    const dateNow = new Date();
    const dateExpire = new Date(Date.parse(day));
    if (dateExpire < dateNow) {
      //localStorage.clear();
      return true;
    }
    return false;
  }

    // تقوم هذه الداله بتحقق من المفاتيح هل هي موجودة ام لا قبل فك التشفير
  isUserRegistered(){
    const email = !!localStorage.getItem('email');
    const expire = !!localStorage.getItem('expire');
    const role = !!localStorage.getItem('role');
    if(email && role && expire) {
      return true;
    }
    return false;
  }

  GetRoleName(email: string) {
    return this.http.get('https://localhost:44377/Account/GetRoleName/' + email, {responseType: 'text'}).pipe();
  }



  ValidateUser(email: string, role: string) {
    return this.http.get('https://localhost:44377/Account/CheckUserClaim/' + email + '&' + role).pipe();
  }
}
