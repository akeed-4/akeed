import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDoctorModel } from 'src/app/ModelFile/DoctorModel/AddDoctorModel';
import { DoctorANDHosptialServerService } from 'src/app/Myservice/DoctANDHospt/DoctorANDHosptialServer.service';

@Component({
  selector: 'app-add-doctor-admin',
  templateUrl: './add-doctor-admin.component.html',
  styleUrls: ['./add-doctor-admin.component.css']
})
export class AddDoctorAdminComponent implements OnInit {



  
  constructor(
    private fb:FormBuilder,
    private services: DoctorANDHosptialServerService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  doctorForm: FormGroup;;
  message: string;
  id: number;
  img: File;
  btnTitle: string;
  title: string;
  IsEditMode: boolean;
  urlIamge: string;
  doctors: AddDoctorModel;
  doctor: AddDoctorModel[];
  isbusy: boolean;
  //editdoctorData: EditDoctorModel;
  //doctorData: DoctorModel;



  messageValidate ={
    doctorUserName: {
      required:' اسم العميل مطلوب!',
    },
    doctorLocation: {
      required:' الرجاء ادخال العنوان!',
    },
    doctorEmail: {
      required:'البريد الالكتروني مطلوب..!',
    },
    doctorAge: {
      required:' الرجاء ادخال العمر!',
    },
    doctorImage: {
      required:'صورة العميل مطلوب..!',
    },
    datejoining: {
      required:'الرجاء ملئ الحقل ..!',
    },
    doctorPhone: {
      required:'رقم الهاتف مطلوب..!',
    }
  };

  ngOnInit(): void {
    this.title = 'اضافة عميل جديد';
    this.btnTitle = 'اضافة';
    this.id = 0;
    this.img = '' as unknown as File
    this.doctor = [];
    this.message = '';
    this.urlIamge = 'assets/images/Add.png';



    this.doctorForm=this.fb.group({
      doctorUserName: ['', Validators.required],
      doctorAge:['', Validators.required ],
      doctorEmail:['', Validators.required ],
      doctorLocation: ['', Validators.required],
      doctorPhone: ['', Validators.required],
      datejoining: ['', Validators.required],
      doctorImage: [null ]
    });


    this.activeRoute.paramMap.subscribe(param => {
      var id = Number( param.get('id'));
      if (id) {
        this.services.GetDoctor(id).subscribe(doctor => {
          this.title = 'تعديل بيانات عميل';
          this.btnTitle = 'تعديل وحفظ';
          this.IsEditMode = true;
          this.id= id;
          this.doctorForm.patchValue({
            doctorUserName: doctor.doctorUserName,
            doctorAge: doctor.doctorAge,
            doctorEmail: doctor.doctorEmail,
            doctorLocation: doctor.doctorLocation,
            doctorPhone: doctor.doctorPhone,
            datejoining: doctor.datejoining,
            


          })
          this.urlIamge = 'assets/images/Doctor/' + doctor.doctorImage;
          fetch (this.urlIamge).then(res => res.blob()).then(blob => {
            var file = new File([blob], doctor.doctorImage);
            this.img = file;
            })
           }, ex => {
          console.log(ex);
        })
      }
    })
  }


  AddDoctor() {

    if (this.doctorForm.valid) {
      const fd = new FormData();
      fd.append('image',this.img); // الباراميتر الاول يمثل اسم المفتاح المرسل وقيمته قيمة الملف المتمثل في الصوره
      fd.append('doctorUserName', this.doctorForm.value.doctorUserName);
      fd.append('doctorAge', this.doctorForm.value.doctorAge);
      fd.append('doctorEmail', this.doctorForm.value.doctorEmail);
      fd.append('doctorLocation', this.doctorForm.value.doctorLocation);
      fd.append('doctorPhone', this.doctorForm.value.doctorPhone);
      fd.append('datejoining', this.doctorForm.value.datejoining);
      if (this.id > 0) {
        fd.append('doctorsId',this.id.toString());
        this.services.EditDoctor(fd).subscribe(doctor => {
          this.message = 'تمت عملية التعديل بنجاح';
          this.GoToList();
        }, ex => {
          console.log(ex);
          this.message = '';
        })

        }else {
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
    sessionStorage.setItem('doctor', 'doctor');
    this.router.navigate(['/controlpanel']);
  }

  GetAllDoctors() {
    this.services.GetAllDoctors().subscribe((list) => {
      this.doctor = list;
    }, ex=>console.log(ex));
  }

  HandleFiles(event: any) {
    if (event.target.files !== null &&  event.target.files.length > 0  ) {
      this.img = event.target.files[0];
      const reader = new FileReader();
      reader.onload= function(e){
        $('#image').attr('src' ) ;
      }
      reader.readAsDataURL(this.img);
    } else
     {
      this.img== null;
      $('#image').attr('src', 'assets/Images/Add.png') ;
     }

  }

}
