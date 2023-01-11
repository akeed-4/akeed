import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-qusation',
  templateUrl: './home-qusation.component.html',
  styleUrls: ['./home-qusation.component.css']
})
export class HomeQusationComponent implements OnInit {

  constructor( private rout:Router) { }

  ngOnInit(): void {
  }
  onClick(){
this.rout.navigate(['doctorconltingveiw']);
  }
  freeQuClick(){
    this.rout.navigate(['freeQustion']);
  }
  healthcareClick(){
    this.rout.navigate(['Healthcare']);

  }

}
