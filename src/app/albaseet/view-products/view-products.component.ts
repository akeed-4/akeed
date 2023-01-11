import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../models/products';


import { MyserveicesService } from '../myserveices.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(
    private service: MyserveicesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  products: products[];
  //hospital: AddHospitalModel;
  num: number;
  message: string;
  //id: number;

  ngOnInit(): void {
    this.num = 0;
    this.products = [];
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

  Addproduct(){
    this.router.navigate(['Addproducts']);
  }


  GetHospitals() {
    this.service.GetAllproducts().subscribe((list) => {
      this.products = list;
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
      this.service.DeleteAllproducts(id).subscribe(x => {
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
      this.service.Deleteproduct(ids).subscribe(x => {
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
        var c = Boolean('this. checked' );
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




