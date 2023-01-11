import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-register',
  templateUrl: './choose-register.component.html',
  styleUrls: ['./choose-register.component.css']
})
export class ChooseRegisterComponent implements OnInit {

  constructor( private rout:Router) { }
id:number
num:Number
  ngOnInit(): void {
  }
 doctorRegisterClick(){
  this.rout.navigate(['doctorRegister']);

  }
  userRegisterClick(){
    this.rout.navigate(['UserRegister']);
  }

}
