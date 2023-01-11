import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorModel } from 'src/app/ModelFile/DoctorModel';
import { DoctorsServiceService } from 'src/app/ServiceFile/DoctorsService.service';

@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private service:DoctorsServiceService
  ) { }


  doctorForm: FormGroup;
  doctors: DoctorModel [];
  doctor=new DoctorModel();
  doctor1=new DoctorModel();
  message: string;
  id: number;
  img: File;
  btnTitle: string;
  title: string;
  errorMsg: string;
  IsEditMode: boolean;
  // editDoctorData: EditDoctorModel;


  messageValidate ={
    doctorUserName: {
      required:' اسم الطبيب مطلوب!',
    },
    doctorEmail: {
      required:' البريد الالكتروني مطلوب!',
    },
    doctorLocation: {
      required:' العنوان مطلوب!',
    },
    doctorImage: {
      required:'صورة الطبيب مطلوب..!',
    },
    doctorAge: {
      required:'حقل العمر مطلوب..!',
    },
    doctorPhone: {
      required:'رقم الهاتف مطلوب..!',
    }
  };

  ngOnInit(): void {
    this.title = 'اضافة عميل جديد';
    this.btnTitle = 'اضافة';
    this.message = '';
    this.id = 0;
    this.img !=null;
    // this.errorMsg = null;
    // this.IsEditMode = false;

    // this.doctor = {
    //   id:0,
    //   doctorUserName:'',
    //   doctorAge:'',
    //   doctorLocation:'',
    //   doctorEmail:'',
    //   doctorPhone:'',
    //   doctorImage:'',
    //   doctorInformation:'',
    //   specialtiesId:0


    // };

    this.doctorForm=this.fb.group({
      doctorUserName: ['', Validators.required],
      doctorAge:['', Validators.required],
      doctorLocation:['', Validators.required ],
      doctorEmail: ['', Validators.required],
     doctorImage: '',
      doctorPhone: ['', Validators.required],
      doctorInformation: ['', Validators.required]
    });

    // this.editDoctorData = {
    //   id:0,
    //   doctorUserName:'',
    //   doctorAge:'',
    //   doctorLocation:'',
    //   doctorEmail:'',
    //   doctorPhone:'',
    //   doctorImage:'',
    //   doctorInformation:''
    // }

  }

  AddDoctor(){
    if (this.doctorForm.valid) {

        this.doctor.doctorInformation = this.doctorForm.value.doctorInformation;
        this.doctor.doctorPhone = this.doctorForm.value.doctorPhone;
        this.doctor.doctorEmail = this.doctorForm.value.doctorEmail;
        this.doctor.doctorLocation = this.doctorForm.value.doctorLocation;
        this.doctor.doctorAge = this.doctorForm.value.doctorAge;
        this.doctor.doctorUserName = this.doctorForm.value.doctorUserName;
        this.doctor.doctorImage = "juuu";
        this.doctor.specialtiesId=1;
        console.log(this.doctor)
        this.service.AddDoctor(this.doctor).subscribe(s => {
          this.doctor1=s;

          this.message = 'تمت اضافة بيانات الطبيب الجديد بنجاح';
        }, ex => this.errorMsg = ex);
      // }else {
      //   this.editDoctorData.id = this.id;
      //   this.editDoctorData.doctorUserName = this.doctorForm.value.doctorUserName;
      //   this.editDoctorData.doctorAge = this.doctorForm.value.doctorAge;
      //   this.editDoctorData.doctorLocation = this.doctorForm.value.doctorLocation;
      //   this.editDoctorData.doctorEmail = this.doctorForm.value.doctorEmail;
      //   this.editDoctorData.doctorPhone = this.doctorForm.value.doctorPhone;
      //   this.editDoctorData.doctorInformation = this.doctorForm.value.doctorInformation;
      //   this.editDoctorData.doctorImage = this.doctorForm.value.doctorImage;

      //   this.service.EditDoctor(this.editDoctorData).subscribe(x => {
      //     this.message = 'تمت عملية التعديل بنجاح';
      //   }, ex => console.log(ex));
      // }
    }

  }
  // GetAllDoctors(){
  //   this.service.GetAllDoctors().subscribe((list) => {
  //     this.doctors = list;
  //   }, ex=>console.log(ex));


}
