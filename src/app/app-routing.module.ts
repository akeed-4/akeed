import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAppointmentDayComponent } from './AppointmentData/add-appointment-day/add-appointment-day.component';
import { ViewBlogsComponent } from './blogs/view-blogs/view-blogs.component';
import { DoctorInfoComponent } from './Consulting/DoctorConlting/doctor-info/doctor-info.component';
import { DoctorconltingComponent } from './Consulting/DoctorConlting/doctorconlting/doctorconlting.component';// import { HomeQusationComponent } from './Consulting/HomeConsulting/home-qusation/home-qusation.component';
import { FreeQustionComponent } from './Consulting/free-qustion/free-qustion.component';
import { HealthcareComponent } from './Consulting/healthcare/healthcare.component';
import { HomeQusationComponent } from './Consulting/HomeConsulting/home-qusation/home-qusation.component';
import { AddDapertmentComponent } from './Dapertment/add-dapertment/add-dapertment.component';
import { ViewAllDapertmentComponent } from './Dapertment/view-all-dapertment/view-all-dapertment.component';
import { AddDoctorsComponent } from './Doctor/add-doctors/add-doctors.component';
import { DoctorRegisterComponent } from './Doctor/doctor-register/doctor-register.component';
import { SplicationsComponent } from './Doctor/Splications/Splications.component';
import { ViewAllDoctorComponent } from './Doctor/view-all-doctor/view-all-doctor.component';
import { ViewInfoDocterComponent } from './Doctor/view-info-docter/view-info-docter.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { AddDoctorHospitalComponent } from './Hospital/add-doctor-hospital/add-doctor-hospital.component';
import { AddHospitalsDataComponent } from './Hospital/add-hospitals-data/add-hospitals-data.component';
import { AddSplicationHospitalComponent } from './Hospital/add-splication-hospital/add-splication-hospital.component';
import { ProfileSetupHospitalComponent } from './SettingsMyData/profile-setup-hospital/profile-setup-hospital.component';
import { ViewHospitalDoctorSettingComponent } from './Hospital/view-hospital-doctor-setting/view-hospital-doctor-setting.component';
import { ChooseRegisterComponent } from './Register/choose-register/choose-register.component';
import { DoctorComponent } from './Register/doctor/doctor.component';
import { LoginComponent } from './Register/login/login.component';
import { RegisterUserComponent } from './Register/register-user/register-user.component';
import { SsssdComponent } from './Register/ssssd/ssssd.component';
import { ViewInfoComponent } from './Register/view-info/view-info.component';
import { DetainDoctComponent } from './Reservation/detainDoct/detainDoct.component';
import { HospitalBookingInfoOneComponent } from './Reservation/hospital-booking-info-one/hospital-booking-info-one.component';
import { HospitalBookingInfoTwoComponent } from './Reservation/hospital-booking-info-two/hospital-booking-info-two.component';
import { HospitalVeiwInfoComponent } from './Reservation/hospital-veiw-info/hospital-veiw-info.component';
import { HospitalVeiwdatainComponent } from './Reservation/hospital-veiwdatain/hospital-veiwdatain.component';
import { AddQualificationsDoctorComponent } from './SettingsMyData/add-qualifications-doctor/add-qualifications-doctor.component';
import { HomeSettingsComponent } from './SettingsMyData/home-settings/home-settings.component';
import { LocationComponent } from './SettingsMyData/location/location.component';
import { MySettingsComponent } from './SettingsMyData/my-settings/my-settings.component';
import { PhoneInformationComponent } from './SettingsMyData/phone-information/phone-information.component';
import { ViewBookingHospitalNewComponent } from './ShowBooking/ShowBookingHosptal/view-booking-hospital-new/view-booking-hospital-new.component';
import { ViewBookingHospitalComponent } from './ShowBooking/ShowBookingHosptal/view-booking-hospital/view-booking-hospital.component';
import { ViewBookinPatientComponent } from './ShowBooking/ShowBookingPatient/view-bookin-patient/view-bookin-patient.component';
import { AddSplicationComponent } from './Splication/add-splication/add-splication.component';
import { MessageComponent } from './SettingsMyData/message/message.component';
import { LoginAppUserComponent } from './SettingsMyData/login-app-user/login-app-user.component';
import { NavBarComponent } from './Home/nav-bar/nav-bar.component';
import { DashbordAdminComponent } from './Home/dashbord-admin/dashbord-admin.component';
import { DashbordFinalComponent } from './Admin/dashbord-final/dashbord-final.component';
import { EditUsersrolesComponent } from './Admin/edit-usersroles/edit-usersroles.component';
import { AddUsersComponent } from './Admin/add-users/add-users.component';
import { AddDoctorAdminComponent } from './Admin/add-doctor-admin/add-doctor-admin.component';
import { AddHospitalAdminComponent } from './Admin/add-hospital-admin/add-hospital-admin.component';
import { CreatAccountTabbiComponent } from './Home/creat-account-tabbi/creat-account-tabbi.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomersComponent } from './albaseet/add-customers/add-customers.component';
import { AddProductsComponent } from './albaseet/add-products/add-products.component';
import { AddrequstComponent } from './albaseet/addrequst/addrequst.component';
import { AddInviceComponent } from './albaseet/add-invice/add-invice.component';
import { DetialsPaymontComponent } from './albaseet/detials-paymont/detials-paymont.component';



const routes: Routes = [
  {path:'',component:HomePageComponent,pathMatch:'full'},
  {path:'Home',component:HomePageComponent},
  {path:'detaining' ,component:DetainDoctComponent},
  {path:'doctorconltingveiw' ,component:DoctorconltingComponent},
  {path:'doctor' ,component:DoctorComponent},
  {path:'ss' ,component:SsssdComponent},
   {path:'HomConsulting' ,component:HomeQusationComponent},
   {path:'freeQustion' ,component:FreeQustionComponent},
   {path:'Healthcare' ,component:HealthcareComponent},
   {path:'chooseRegister',component:ChooseRegisterComponent},
   {path:'doctorRegister',component:DoctorRegisterComponent},
   {path:'Login',component:LoginComponent},
   {path:'UserRegister',component:RegisterUserComponent},
   {path:'HospitalView',component:HospitalVeiwdatainComponent},
   {path:'HospitalViewInfo/:id',component:HospitalVeiwInfoComponent},
   {path:'doctorInfo',component:DoctorInfoComponent},
   {path:'ViewInfo',component:ViewInfoComponent},
   {path:'ViewAllDoctor/:id',component:ViewAllDoctorComponent},
   {path:'ViewInfoDoctor/:id',component:ViewInfoDocterComponent},
   {path:'HospitalBookingInfoOne/:id',component:HospitalBookingInfoOneComponent},
   {path:'HospitalBookingInfoTwo/:id',component:HospitalBookingInfoTwoComponent},
   {path:'ViewAllDapertment/:id',component:ViewAllDapertmentComponent},
   {path:'ViewBlog',component:ViewBlogsComponent},
   {path:'HomeSettings',component:HomeSettingsComponent},
  //  عرض اعداد الاطباء
  {path:'ViewHospitalDoctorSetting',component:ViewHospitalDoctorSettingComponent},

  {path:'Splication',component:SplicationsComponent},
  {path:'AddDapertment',component:AddDapertmentComponent},
  {path:'AddSplication',component:AddSplicationComponent},
  {path:'AddSplicationHospital/:id',component:AddSplicationHospitalComponent},
  {path:'AddDoctors',component:AddDoctorsComponent},
  // عرض اضافة اوقات الدوام
  {path:'AddAppointmentDay',component:AddAppointmentDayComponent},
    // عرض اضافة اطباء المستشفي
  {path:'AddDoctorHospital/:id',component:AddDoctorHospitalComponent},
  // setting
  {path:'MySettings',component:MySettingsComponent},
  {path:'ProfileSetupHospital',component:ProfileSetupHospitalComponent},
  {path:'AddHospitalsData',component:AddHospitalsDataComponent},
  {path:'Location',component:LocationComponent},
  {path:'PhoneInformation',component:PhoneInformationComponent},
  {path:'AddQualificationsDoctor',component:AddQualificationsDoctorComponent},
  {path:'Message',component:MessageComponent},

  
// خاص بعرض الحجوزات
  {path:'Splications',component:SplicationsComponent},
  {path:'ViewBookingHospital',component:ViewBookingHospitalComponent},
  {path:'ViewBookingHospitalNew',component:ViewBookingHospitalNewComponent},
  {path:'ViewBookinPatient',component:ViewBookinPatientComponent},
  {path:'Logins',component:LoginAppUserComponent},
//الصلاحيات
{path:'NavBar',component:NavBarComponent},
{path:'dashbord',component:DashbordAdminComponent},
{path:'DashbordFinal',component:DashbordFinalComponent},
{path:'EditUsersroles/:id/:id1',component:EditUsersrolesComponent},
{path:'EditUsers/:id',component:AddUsersComponent},
{path:'AddUsers',component:AddUsersComponent},
{path:'AddDoctorAdmin',component:AddDoctorAdminComponent},
{path:'EditDoctorAdmin/:id',component:AddDoctorAdminComponent},
{path:'AddHospitalAdmin',component:AddHospitalAdminComponent},
{path:'EditHospitalAdmin/:id',component:AddHospitalAdminComponent},
{path:'CreatAccountTabbi',component:CreatAccountTabbiComponent},
{path:'Customers',component:CustomersComponent},

{path:'Addcustomers',component:AddCustomersComponent},
  {path:'Addproducts',component:AddProductsComponent},
  
  {path:'AddRequst',component:AddrequstComponent},
  {path:'Add-inivce',component:AddInviceComponent},
  {path:'checkDetails',component:DetialsPaymontComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
