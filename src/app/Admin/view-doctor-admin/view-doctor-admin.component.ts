import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctors } from 'src/app/ModelFile/DoctorModel/Doctros';
import * as $ from 'jquery';
import { DoctorANDHosptialServerService } from 'src/app/Myservice/DoctANDHospt/DoctorANDHosptialServer.service';

@Component({
  selector: 'app-view-doctor-admin',
  templateUrl: './view-doctor-admin.component.html',
  styleUrls: ['./view-doctor-admin.component.css']
})
export class ViewDoctorAdminComponent implements OnInit {


  constructor(
    private router: Router,
    private servicess: DoctorANDHosptialServerService,
    private activeRoute: ActivatedRoute

  ) { }


  doctors: Doctors [];
  //doctor: AddDoctorModel;
  num: number;
  message: string;

  ngOnInit(): void {
    this.num = 0;
    this.doctors = [];
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
    this.servicess.GetAllDoctors().subscribe((list) => {
      this.doctors = list;
    }, ex => {
      console.log(ex);
    });
  }


  AddDoctor(){
    this.router.navigate(['AddDoctorAdmin']);
  }



  EditDoctor(id: number) {
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

      this.servicess.DeletAllDoctors(ids).subscribe(s => {
        console.log(s);
        this.getDoctors();
        $("#btnClose").trigger("click");
      }, ex => console.log(ex));
    }
  }


}
