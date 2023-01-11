import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { $$ } from 'protractor';
@Component({
  selector: 'app-add-appointment-day',
  templateUrl: './add-appointment-day.component.html',
  styleUrls: ['./add-appointment-day.component.css']
})
export class AddAppointmentDayComponent implements OnInit {

  constructor() { }
  date = new Date("01/05/2020");
  myDate: Date = new Date();
   event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
   options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  ngOnInit(): void {
  // let  day =this. date.toLocaleDateString('en-us', {weekday: 'long'});
    // console.log( this.myDate .t:'EEEE, MMMM d, y');
    // console.log(this.event.toLocaleDateString('ar-EG', this.options.day));
    $(document).ready(function(){
    $('.add').click(function(){
      $(".list").append(
      '<div class="mb-2 row justify-content-between px-3">' +
          '<select class="mob mb-2">' +
              '<option value="opt1">Mon-Fri</option>' +
              '<option value="opt2">Sat-Sun</option>' +
              '</select>' +
          '<div class="mob">' +
              '<label class="text-grey mr-1">From</label>' +
              '<input class="ml-1" type="time" name="from">' +
              '</div>' +
          '<div class="mob mb-2">' +
              '<label class="text-grey mr-4">To</label>' +
              '<input class="ml-1" type="time" name="to">' +
              '</div>' +
          '<div class="mt-1 cancel fa fa-times text-danger">' +
              '</div>' +
          '</div>');
      });


      $(".list").on('click', '.cancel', function(){
      $(this).parent().remove();
      });
    });
    var today = new Date('12/31/2015');
var tomorrow = new Date(today);
tomorrow.setDate(today.getDate()+1);
// tomorrow.toLocaleDateString();
// console.log(tomorrow);


  }
  // $(document).ready(function(){



  //   });
  addAppointment(){
    console.log( $(".list.time").get())
    //EEEE, MMMM d, y
    // var ddMMyyyy = this.datePipe.transform(new Date(),"dd-MM-yyyy");
    //535714222
  }

}
