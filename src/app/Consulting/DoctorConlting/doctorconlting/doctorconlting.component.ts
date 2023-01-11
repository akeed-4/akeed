import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorconlting',
  templateUrl: './doctorconlting.component.html',
  styleUrls: ['./doctorconlting.component.css']
})
export class DoctorconltingComponent implements OnInit {
  //doctorInfo
  constructor( private rout:Router) { }

  ngOnInit(): void {
  }
  VeiwDoctorInfo(){
    this.rout.navigate(['doctorInfo']);
  }

}
