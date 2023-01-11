import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from '../models/customers';


import { MyserveicesService } from '../myserveices.service';

@Component({
  selector: 'app-invice',
  templateUrl: './invice.component.html',
  styleUrls: ['./invice.component.css']
})
export class InviceComponent implements OnInit {

  constructor(
    private router: Router,
    private servicess: MyserveicesService,
    private activeRoute: ActivatedRoute

  ) { }


  customers: customer [];
  //doctor: AddDoctorModel;
  num: number;
  message: string;

  ngOnInit(): void {
    this.num = 0;
    this.customers = [];
    this.message = '';
    // this.doctor = {
    //   doctorsId: 0,
    //   doctorName: '',
    //   doctorType: '',
    //   doctorEmail:'',
    //   doctorNationality: '',
    //   doctorTelephone: '',
    //   doctorPicure: '',
    //   doctorQualifa: ''
    // }

    //this.doctors = [];

    this.getDoctors();
  }

  getDoctors() {
    this.servicess.GetAllcustmers().subscribe((list: customer[]) => {
      this.customers = list;
    }, (ex: any) => {
      console.log(ex);
    });
  }


  Addcustomer(){
    this.router.navigate(['Add-inivce']);
  }



  Editcustomer(id: number) {
    if (id) {
      this.router.navigate(['EditDoctorAdmin', id]);
    }

  }


  SelectAll() {
    var tbl = $('#tbl');
    var header = tbl.find('thead .ckheader');
    var item = tbl.find('tbody .ckitem');

    $(function () {
      item.on('change', function () {
        if ($(this).is(':checked')) {
          $(this).closest('tr').addClass('NewRowColor');
        }
        else {
          $(this).closest('tr').removeClass('NewRowColor');
        }
      });

      header.change(function () {
        
        var c = Boolean( 'this.checked' ) ;
        item.prop("checked", c);
        item.trigger('check');
        if ($(this).is(':checked')) {
          $(item).closest('tr').addClass('NewRowColor');
        }
        else {
          $(item).closest('tr').removeClass('NewRowColor');
        }
      });
    });
  }

  IsDelete() {
    var checkboxes = document.getElementsByClassName('ckitem');
    if (checkboxes.length > 0) {
      for (let i = 0; i < checkboxes.length; i++) {
        if ($(checkboxes[i]).is(":checked")) {
          return true;
        }
      }
    }
    return false;
  }

  DeleteCount() {
    var cont = $(".ckitem:checked").length;
    this.num = cont;
  }

  DeleteConfirm() {
    var checkboxes = document.getElementsByClassName('ckitem');
    if (checkboxes.length > 0) {
      var ids = [];
      for (let i = 0; i < checkboxes.length; i++) {
        if ($(checkboxes[i]).is(":checked")) {
          var id = String( $(checkboxes[i]).val());
          ids.push(id);
        }
      }

      this.servicess.DeletAllcustomer(ids).subscribe((s: any) => {
        console.log(s);
        this.getDoctors();
        $("#btnClose").trigger("click");
      }, (ex: any) => console.log(ex));
    }
  }


}
