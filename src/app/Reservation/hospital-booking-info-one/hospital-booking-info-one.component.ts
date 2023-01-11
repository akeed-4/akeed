import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { __param } from 'tslib';

@Component({
  selector: 'app-hospital-booking-info-one',
  templateUrl: './hospital-booking-info-one.component.html',
  styleUrls: ['./hospital-booking-info-one.component.css']
})
export class HospitalBookingInfoOneComponent implements OnInit {

  constructor(private rout:Router,
    private activeRout:ActivatedRoute) { }

  ngOnInit(): void {
this.getId()

  }
  hospitslBookingInfoTow(){
    this.rout.navigate(['HospitalBookingInfoTwo']);

  }
  getId(){
    this.activeRout.paramMap.subscribe(param=>{
      var id=param.get('id')
        console.log(id);
      });

  }

}
