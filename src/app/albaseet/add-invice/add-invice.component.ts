import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from '../models/customers';
import { inivce } from '../models/invice';
import { products } from '../models/products';


import { MyserveicesService } from '../myserveices.service';

@Component({
  selector: 'app-add-invice',
  templateUrl: './add-invice.component.html',
  styleUrls: ['./add-invice.component.css']
})
export class AddInviceComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private services: MyserveicesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  customerForm!: FormGroup;;
  message: string;
  id: number;
  img: File;
  btnTitle: string;
  title: string;
  IsEditMode: boolean;
  urlIamge: string;
  product:products[];
  customers: inivce;
  inivce: inivce[];
  isbusy: boolean;
  //editdoctorData: EditDoctorModel;
  //doctorData: DoctorModel;



  messageValidate = {
    customername: {
      required: ' اسم العميل مطلوب!',
    },
    customerAddress: {
      required: ' الرجاء ادخال العنوان!',
    },
    customerEmail: {
      required: 'البريد الالكتروني مطلوب..!',
    },
  
    
    customerphone: {
      required: 'رقم الهاتف مطلوب..!',
    }
  };

  ngOnInit(): void {
    this.title = 'اضافة فاتوره جديد';
    this.btnTitle = 'اضافة';
    this.id = 0;
    this.img = '' as unknown as File
    this.inivce = [];
    this.message = '';
    this.urlIamge = 'assets/images/Add.png';



    this.customerForm = this.fb.group({
      customername: ['', Validators.required],
      customerEmail: ['', Validators.required],
      customerphone: ['', Validators.required],
      customerAddress: ['', Validators.required],
   
    });


    this.activeRoute.paramMap.subscribe(param => {
      var id = Number(param.get('id'));
      if (id) {
        this.services.Getinvices(id).subscribe(invice => {
          this.title = 'تعديل بيانات عميل';
          this.btnTitle = 'تعديل وحفظ';
          this.IsEditMode = true;
          this.id = id;
          this.customerForm.patchValue({
            invoice_name: invice.invoice_name,
            btb_title: invice.btb_title,
            btc_title: invice.btc_title,
            customer_name: invice.customer_name,


          })
        })
      }
    })
  }

  arrcustomer:products[];
  changeWebsiteproducts( e:any){
    this.product=[];
    this.services.GetAllproduct
    ().subscribe((list:products[])=>
    {
    this.product=list;
    console.log(this.arrcustomer)

    },e=>{
      console.log(e.console.error);

    });


  }

arrcustomers:customer[];
  changeWebsitecustomer( e:any){
    this.arrcustomers=[];
    this.services.GetAllcustmers
    ().subscribe((list:customer[])=>
    {
    this.arrcustomers=list;
    console.log(this.arrcustomers)

    },e=>{
      console.log(e.console.error);

    });


  }
  Addcustmer() {

    if (this.customerForm.valid) {
      const fd = new FormData();
      // الباراميتر الاول يمثل اسم المفتاح المرسل وقيمته قيمة الملف المتمثل في الصوره
      fd.append('customername', this.customerForm.value.customername);
      fd.append('customerEmail', this.customerForm.value.customerEmail);
      fd.append('customerphone', this.customerForm.value.customerphone);
      fd.append('customerAddress', this.customerForm.value.customerAddress);
    
      if (this.id > 0) {
        fd.append('customerId', this.id.toString());
        this.services.Editcustomer(fd).subscribe(doctor => {
          this.message = 'تمت عملية التعديل بنجاح';
          this.GoToList();
        }, ex => {
          console.log(ex);
          this.message = '';
        })

      } else {
        this.services.AddDoctor(fd).subscribe(doctor => {
          this.ngOnInit();
          this.message = 'تمت اضافة بيانات العميل بنجاح';
        }, ex => {
          console.log(ex);
          this.message = '';
        })

      }

    }

  }

  GoToList() {
    sessionStorage.setItem('customer', 'customer');
    this.router.navigate(['/controlpanel']);
  }

  GetAllDoctors() {
    this.services.GetAllinices().subscribe((list) => {
      this.inivce = list;
    }, ex => console.log(ex));
  }

  HandleFiles(event: any) {
    if (event.target.files !== null && event.target.files.length > 0) {
      this.img = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#image').attr('src');
      }
      reader.readAsDataURL(this.img);
    } else {
      this.img == null;
      $('#image').attr('src', 'assets/Images/Add.png');
    }

  }

}
