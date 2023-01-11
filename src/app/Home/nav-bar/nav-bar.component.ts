import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthonticationService } from 'src/app/Myservice/authontication.service';
import { MyserviceService } from 'src/app/Myservice/myservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  message!:string;
  constructor(private service:MyserviceService,private route:Router,
    private auth:AuthonticationService) { }
    isdoct!:boolean;
    isHospital!:boolean
    isAdinn!:boolean;
    isUser:boolean;
    email!:string;
    title = 'Mudhaffer-Net';
      ngOnInit() {
        this.isAdinn=false
        this.isdoct=false
        this.isHospital=false
        this.isUser=false;

        if (this.isUserRegistered()) {
          if (this.auth.IsExpiredDate(this.auth.expire)) {
           this.Logout();
          }
          this.auth.ValidateUser(this.auth.email, this.auth.role).subscribe(success => {
              console.log('user authorized');

            },
            err => {
              console.log(err);
             //this.Logout();
            }
          );
        }
      }


      Logout() {
        this.service.LogoutUsers().subscribe(
          succ => {
            localStorage.clear();
            console.log('authrozion return false');
            this.route.navigate(['Home']).then(x=> {window.location.reload()});

          },
          err => console.log(err)
        );

      }
      // تتحقق هل المفاتيح موجوده والا مش موجوده
      isUserRegistered() {
        const email = !!localStorage.getItem('email');
         const exp = !!localStorage.getItem('expire');
         const role = !!localStorage.getItem('role');
     

        if (email &&exp&&role) {
          return true;
        }
        return false;
      }

      IsAdmin(){
        var isAdmin=!!localStorage.getItem('role');
      
        // var id=!!localStorage.getItem('id');
        // console.log(id)

        if (isAdmin) {

          if(this.auth.role=="Admin"){
          // this.isdoct=true
          // this.isAdinn=true
          // this.isHospital=true
          return true;}
        }
        return false;
      }
      IsDoctor(){
        var isDoctor=!!this.auth.role;

        if (isDoctor) {
          if(this.auth.role==="Doctor"){
        this.isdoct=true

        this.isAdinn=false

          return true;}
        }
        return false;
      }
      IsHospital(){
        var IsHospital=!!this.auth.role;

        if (IsHospital) {
          if(this.auth.role==="Hospital"){
        this.isHospital=true
        this.isAdinn=false

          return true;}
        }
        return false;
      }

      IsUsers(){
        var IsUser=!!this.auth.role;

        if (IsUser) {
          if(this.auth.role==="User"){
        this.isUser=true
        this.isAdinn=false

          return true;}
        }
        return false;
      }
    }
