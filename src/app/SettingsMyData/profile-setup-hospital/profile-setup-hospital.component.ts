import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-setup-hospital',
  templateUrl: './profile-setup-hospital.component.html',
  styleUrls: ['./profile-setup-hospital.component.css']
})
export class ProfileSetupHospitalComponent implements OnInit {
isManDocter:boolean=false
isAddDocter:boolean=false

  constructor(private rout:Router) { }

  ngOnInit(): void {
    this.viewSettingMy(0);


  }
  addHospitalsData(){
    this.rout.navigate(['AddHospitalsData']);
  }
  addSplicationHospital(id:any){
    this.rout.navigate(['AddSplicationHospital',id])

  }
  addDoctorHospital(id:any){
    this.rout.navigate(['AddDoctorHospital',id]);
  }
  addLocation(){
    this.rout.navigate(['Location'])
  }
  addPhoneInformation(){
    this.rout.navigate(['PhoneInformation'])
  }
  addQualificationsDoctor(){
    this.rout.navigate(['AddQualificationsDoctor'])
  }
  viewSettingMy(id:any){
    if (id==0){
      this.isManDocter=true
      this.isAddDocter=true
    }
    else{
      this.isManDocter=false
      this.isAddDocter=true

    }

  }
}
