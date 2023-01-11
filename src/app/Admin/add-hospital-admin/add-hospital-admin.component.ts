import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddHospitalModel } from 'src/app/ModelFile/HospitalModel/AddHospitalModel';
import { DoctorANDHosptialServerService } from 'src/app/Myservice/DoctANDHospt/DoctorANDHosptialServer.service';
import { Url } from 'url';

@Component({
  selector: 'app-add-hospital-admin',
  templateUrl: './add-hospital-admin.component.html',
  styleUrls: ['./add-hospital-admin.component.css']
})
export class AddHospitalAdminComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private service: DoctorANDHosptialServerService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  hosptialForm:FormGroup
  message: string;
  btnTitle: string;
  title: string;
  id: number;
  img: File;
  hosptalMod: AddHospitalModel;
  IsEditMode: boolean;
  hospital: AddHospitalModel[];
  urlIamge: string;
  isbusy: boolean;

  messageValidate ={
    hospitalUserNameAR: {
      required:' اسم الصنف مطلوب!',
    },
    hospitalEmail: {
      required:' البريد الالكتروني مطلوب!',
    },
    hospitalLocation: {
      required:' العنوان مطلوب!',
    },
    hospitalImage: {
      required:'صورة الصنف مطلوب..!',
    },
    hospitalPhone: {
      required:'رقم الهاتف مطلوب..!',
    },
    hospitalType: {
      required:'نوع الفئه مطلوب..!',
    },
    datejoining: {
      required:'الرجاء ملئ الحقل ..!',
    }
  };

  ngOnInit(): void {
    this.title = 'اضافة صنف جديد';
    this.btnTitle = 'اضافة';
    this.message = '';
    this.id = 0;
    this.img = '' as unknown as File;
    this.hospital = [];
    this.urlIamge = 'assets/images/Add.png';


    this.hosptialForm=this.fb.group({
      hospitalUserNameAR: ['', Validators.required],
      hospitalEmail:['', Validators.required],
      hospitalLocation:['', Validators.required ],
      hospitalPhone:['', Validators.required ],
      hospitalType:['', Validators.required ],
      datejoining:['', Validators.required ],
      hospitalImage: [null]
    });

    this.activeRoute.paramMap.subscribe(param => {
      const id = Number( param.get('id')) ;
      if (id) {
        this.service.GetHospital(id).subscribe(hosptalMod => {
          this.title = 'تعديل بيانات صنف';
          this.btnTitle = 'تعديل وحفظ';
          this.IsEditMode = true;
          this.id= id;
          this.hosptialForm.patchValue({
            hospitalUserNameAR: hosptalMod.hospitalUserNameAR,
            hospitalEmail: hosptalMod.hospitalEmail,
            hospitalLocation: hosptalMod.hospitalLocation,
            hospitalPhone: hosptalMod.hospitalPhone,
            hospitalType: hosptalMod.hospitalType,
            datejoining: hosptalMod.datejoining,
            //hospitalInformation: hosptalMod.hospitalInformation,
          })
          this.urlIamge = 'assets/images/Actor/' + hosptalMod.hospitalImage;
          fetch (this.urlIamge).then(res => res.blob()).then(blob => {
            var file = new File([blob], hosptalMod.hospitalImage);
            this.img = file;
            })
           }, ex => {
          console.log(ex);
        })
      }
    })
  }

  AddHosptial() {
    if (this.hosptialForm.valid) {
      const fd = new FormData(); // قمنا بانشاء متغير جديد من الفورم داتا
        fd.append('image',this.img); // الباراميتر الاول يمثل اسم المفتاح المرسل وقيمته قيمة الملف المتمثل في الصوره
        fd.append('hospitalUserNameAR', this.hosptialForm.value.hospitalUserNameAR);
        fd.append('hospitalLocation', this.hosptialForm.value.hospitalLocation);
        fd.append('hospitalEmail', this.hosptialForm.value.hospitalEmail);
        fd.append('hospitalType', this.hosptialForm.value.hospitalType);
        fd.append('hospitalPhone', this.hosptialForm.value.hospitalPhone);
        //fd.append('hospitalLogc', this.hosptialForm.value.hospitalLogc);
        fd.append('datejoining', this.hosptialForm.value.datejoining);
        //fd.append('hospitalInformation', this.hosptialForm.value.hospitalInformation);
        if (this.id > 0) {
          fd.append('hospitalId',this.id.toString());
          this.service.EditHospital(fd).subscribe(hospital => {
           this.message = 'تمت تعديل بيانات المستشفى بنجاح';
            this.GoToList();
          }, ex => {
            console.log(ex);
            this.message = '';
          })

        }else {
          this.service.AddHospital(fd).subscribe(hospital => {
            this.ngOnInit();
            this.message = 'تمت اضافة بيانات المستشفى بنجاح';
          }, ex => {
            console.log(ex);
            this.message = '';
          })
        }

       }

   }

   GoToList() {
    sessionStorage.setItem('hospital', 'hospital');
    this.router.navigate(['/controlpanel']);
  }

  GetAllHospitals() {
    this.service.GetAllHospitals().subscribe((list) => {
      this.hospital = list;
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
      // $('#image').attr('src', e.target ) ;
    }
    reader.readAsDataURL(this.img);
  } else
   {
    this.img== null;
    $('#image').attr('src', 'assets/Images/Add.png') ;
   }

}

}
