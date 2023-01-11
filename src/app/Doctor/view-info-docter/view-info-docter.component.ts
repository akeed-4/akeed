import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-info-docter',
  templateUrl: './view-info-docter.component.html',
  styleUrls: ['./view-info-docter.component.css']
})
export class ViewInfoDocterComponent implements OnInit {
idDoctor:any
  constructor( private activeRout:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getId();
  }
  getId(){
    this.activeRout.paramMap.subscribe(param=>{
    this. idDoctor=param.get('id')
        console.log( this.idDoctor);
      });}
}
