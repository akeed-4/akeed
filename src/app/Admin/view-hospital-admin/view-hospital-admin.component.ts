import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospitalss } from 'src/app/ModelFile/HospitalModel/Hospitalss';
import * as $ from 'jquery';
import { DoctorANDHosptialServerService } from 'src/app/Myservice/DoctANDHospt/DoctorANDHosptialServer.service';

@Component({
  selector: 'app-view-hospital-admin',
  templateUrl: './view-hospital-admin.component.html',
  styleUrls: ['./view-hospital-admin.component.css']
})
export class ViewHospitalAdminComponent implements OnInit {

  constructor(
    private service: DoctorANDHosptialServerService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  hospitals: Hospitalss[];
  //hospital: AddHospitalModel;
  num: number;
  message: string;
  //id: number;

  ngOnInit(): void {
    this.num = 0;
    this.hospitals = [];
    this.message = '';
    // this.hospital = {
    //   hospitalId:0,
    //   hospitalName:'',
    //   hospitalAdderss:'',
    //   hospitalEmail:'',
    //   hospitalImage:''
    // }

    this.GetHospitals();

    //this.hospitals = [];

  }

  AddHospital(){
    this.router.navigate(['AddHospitalAdmin']);
  }


  GetHospitals() {
    this.service.GetAllHospitals().subscribe((list) => {
      this.hospitals = list;
    }, ex => {
      console.log(ex);
    });
  }

  EditHospital(id: number) {

      this.router.navigate(['EditHospitalAdmin', id]);


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

  DeleteConfirms(id: number) {
    if (id)
    {
      this.service.DeleteAllHospitals(id).subscribe(x => {
        this.GetHospitals();
        //$("#btnClose").trigger("click");
      }, ex => console.log(ex));

    }
  }

  DeleteConfirm() {
    var checkboxes = document.getElementsByClassName("ckitem");
    if (checkboxes.length > 0) {
      var ids = [];
      for (let i = 0; i < checkboxes.length; i++) {
         if ($(checkboxes[i]).is(":checked")) {
            var id = String( $(checkboxes[i]).val());
            ids.push(id);
         }
      }
      this.service.DeleteHospital(ids).subscribe(x => {
        this.GetHospitals();
        $("#btnClose").trigger("click");
      }, ex => console.log(ex));
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
        var c = Boolean(' this.checked');
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

  DeleteCount() {
    var count = $(".ckitem:checked").length;
    this.num = count;
  }

}



