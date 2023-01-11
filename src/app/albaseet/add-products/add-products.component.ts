import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../models/products';

import { MyserveicesService } from '../myserveices.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  constructor(
    private fb:FormBuilder,
    private service:MyserveicesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  productForm:FormGroup
  message: string;
  btnTitle: string;
  title: string;
  id: number;
  img: File;
  productsMod: products;
  IsEditMode: boolean;
  product: products[];
  urlIamge: string;
  isbusy: boolean;

  messageValidate ={
    productsname: {
      required:' اسم الصنف مطلوب!',
    },
   
  
    
   
    productsPrice: {
      required:'السعر  مطلوب..!',
    },
    productsImage: {
      required:'الرجاء ملئ الحقل ..!',
    }
  };

  ngOnInit(): void {
    this.title = 'اضافة صنف جديد';
    this.btnTitle = 'اضافة';
    this.message = '';
    this.id = 0;
    this.img = '' as unknown as File;
    this.product = [];
    this.urlIamge = '/assets/imges/logo.png';


    this.productForm=this.fb.group({
      productsname: ['', Validators.required],
      productsPrice:['', Validators.required],
    
      productsImage: [null]
    });

    this.activeRoute.paramMap.subscribe(param => {
      const id = Number( param.get('id')) ;
      if (id) {
        this.service.Getproduct(id).subscribe(productsMod => {
          this.title = 'تعديل بيانات صنف';
          this.btnTitle = 'تعديل وحفظ';
          this.IsEditMode = true;
          this.id= id;
          this.productForm.patchValue({
            productsname: productsMod.productsname,
            price: productsMod.price,
            image: productsMod.image,
       
            //hospitalInformation: hosptalMod.hospitalInformation,
          })
      
        })
      }
    })
  }

  Addproduct() {
    if (this.productForm.valid) {
      const fd = new FormData(); // قمنا بانشاء متغير جديد من الفورم داتا
        fd.append('image',this.img); // الباراميتر الاول يمثل اسم المفتاح المرسل وقيمته قيمة الملف المتمثل في الصوره
        fd.append('productsname', this.productForm.value.productsname);
        fd.append('productsPrice', this.productForm.value.productsPrice);
     
        //fd.append('hospitalLogc', this.productForm.value.hospitalLogc);
      
        //fd.append('hospitalInformation', this.productForm.value.hospitalInformation);
        if (this.id > 0) {
          fd.append('productsId',this.id.toString());
          this.service.Editproduct(fd).subscribe(hospital => {
           this.message = 'تمت تعديل بيانات الصنف بنجاح';
            this.GoToList();
          }, ex => {
            console.log(ex);
            this.message = '';
          })

        }else {
          this.service.Addproduct(fd).subscribe(hospital => {
            this.ngOnInit();
            this.message = 'تمت اضافة بيانات الصنف بنجاح';
          }, ex => {
            console.log(ex);
            this.message = '';
          })
        }

       }

   }

   GoToList() {
    sessionStorage.setItem('product', 'product');
    this.router.navigate(['/controlpanel']);
  }

  GetAllHospitals() {
    this.service.GetAllproduct().subscribe((list) => {
      this.product = list;
    }, ex=>console.log(ex));
  }

  // دالة التعامل مع الصوره
HandleFiles(event: any) {
  if (event.target.files !== null &&  event.target.files.length > 0  ) {
    this.img = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.img);
    reader.onload= function(e){
      const csv = reader.result;
       $('#image').attr('src', e.target.result.toString()) ;
    }
    reader.readAsDataURL(this.img);
  } else
   {
    this.img== null;
    $('#image').attr('src', '/assets/imges/logo.png') ;
   }

}

}

