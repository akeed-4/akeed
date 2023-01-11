import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from '../models/customers';


import { MyserveicesService } from '../myserveices.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {




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
  customers: customer;
  customer: customer[];
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
    this.title = 'اضافة عميل جديد';
    this.btnTitle = 'اضافة';
    this.id = 0;
    this.img = '' as unknown as File
    this.customer = [];
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
        this.services.Getcustomer(id).subscribe(customer => {
          this.title = 'تعديل بيانات عميل';
          this.btnTitle = 'تعديل وحفظ';
          this.IsEditMode = true;
          this.id = id;
          this.customerForm.patchValue({
            customername: customer.customername,
            address: customer.address,
            mobile: customer.mobile,
            state: customer.state,


          })
        })
      }
    })
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

  GetAllcustmer() {
    this.services.GetAllcustmers().subscribe((list) => {
      this.customer = list;
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
