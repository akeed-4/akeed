import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-settings',
  templateUrl: './my-settings.component.html',
  styleUrls: ['./my-settings.component.css']
})
export class MySettingsComponent implements OnInit {

  constructor( private rout:Router) { }

  ngOnInit(): void {

  }
  profileSetupHospital(){
    this.rout.navigate(['ProfileSetupHospital'])
  }
}
