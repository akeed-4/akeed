import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-settings',
  templateUrl: './home-settings.component.html',
  styleUrls: ['./home-settings.component.css']
})
export class HomeSettingsComponent implements OnInit {

  constructor( private rout:Router) { }

  ngOnInit(): void {
  }
  addSplicationHospital(){
    this.rout.navigate(['AddSplicationHospital'])

  }
  addAppointmentDay(){
    this.rout.navigate(['AddAppointmentDay'])
  }
  addDoctorHospital(){
    this.rout.navigate(['AddDoctorHospital']);
  }

}
