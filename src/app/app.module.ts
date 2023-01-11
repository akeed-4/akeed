import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  ReactiveFormsModule ,FormsModule} from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { NavMenuComponent } from './Home/nav-menu/nav-menu.component';
import { FooterMenuComponent } from './Home/footer-menu/footer-menu.component';
import { TipsComponent } from './Home/tips/tips.component';
import { VideoTipesComponent } from './Home/video-tipes/video-tipes.component';
import { DetanavComponent } from './Reservation/detanav/detanav.component';
import { DetainDoctComponent } from './Reservation/detainDoct/detainDoct.component';
import { DoctorconltingComponent } from './Consulting/DoctorConlting/doctorconlting/doctorconlting.component';

import { HomeQusationComponent } from './Consulting/HomeConsulting/home-qusation/home-qusation.component';
import { FreeQustionComponent } from './Consulting/free-qustion/free-qustion.component';
import { HealthcareComponent } from './Consulting/healthcare/healthcare.component';
import { ChooseRegisterComponent } from './Register/choose-register/choose-register.component';
import { DoctorRegisterComponent } from './Doctor/doctor-register/doctor-register.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Register/login/login.component';
import { RegisterUserComponent } from './Register/register-user/register-user.component';
import { HospitalVeiwdatainComponent } from './Reservation/hospital-veiwdatain/hospital-veiwdatain.component';
import { HospitalVeiwInfoComponent } from './Reservation/hospital-veiw-info/hospital-veiw-info.component';
import { DoctorInfoComponent } from './Consulting/DoctorConlting/doctor-info/doctor-info.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewInfoComponent } from './Register/view-info/view-info.component';
import { ViewAllDoctorComponent } from './Doctor/view-all-doctor/view-all-doctor.component';
import { ViewInfoDocterComponent } from './Doctor/view-info-docter/view-info-docter.component';
import { HospitalBookingInfoOneComponent } from './Reservation/hospital-booking-info-one/hospital-booking-info-one.component';
import { HospitalBookingInfoTwoComponent } from './Reservation/hospital-booking-info-two/hospital-booking-info-two.component';
import { ViewAllDapertmentComponent } from './Dapertment/view-all-dapertment/view-all-dapertment.component';
import { ViewBlogsComponent } from './blogs/view-blogs/view-blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeSettingsComponent } from './SettingsMyData/home-settings/home-settings.component';
import { ViewHospitalDoctorSettingComponent } from './Hospital/view-hospital-doctor-setting/view-hospital-doctor-setting.component';

import { AddDapertmentComponent } from './Dapertment/add-dapertment/add-dapertment.component';
import { AddSplicationComponent } from './Splication/add-splication/add-splication.component';
import { AddSplicationHospitalComponent } from './Hospital/add-splication-hospital/add-splication-hospital.component';
import { AddAppointmentHospitalComponent } from './Hospital/add-appointment-hospital/add-appointment-hospital.component';
import { AddAppointmentDayComponent } from './AppointmentData/add-appointment-day/add-appointment-day.component';
import { AddDoctorHospitalComponent } from './Hospital/add-doctor-hospital/add-doctor-hospital.component';
import { MySettingsComponent } from './SettingsMyData/my-settings/my-settings.component';
import { ProfileSetupHospitalComponent } from './SettingsMyData/profile-setup-hospital/profile-setup-hospital.component';
import { AddHospitalsDataComponent } from './Hospital/add-hospitals-data/add-hospitals-data.component';
import { AddDoctorsComponent } from './Doctor/add-doctors/add-doctors.component';
import { ViewBookingHospitalComponent } from './ShowBooking/ShowBookingHosptal/view-booking-hospital/view-booking-hospital.component';
import { ViewBookingHospitalNewComponent } from './ShowBooking/ShowBookingHosptal/view-booking-hospital-new/view-booking-hospital-new.component';
import { ViewBookinPatientComponent } from './ShowBooking/ShowBookingPatient/view-bookin-patient/view-bookin-patient.component';
import { LocationComponent } from './SettingsMyData/location/location.component';
import { PhoneInformationComponent } from './SettingsMyData/phone-information/phone-information.component';
import { AddQualificationsDoctorComponent } from './SettingsMyData/add-qualifications-doctor/add-qualifications-doctor.component';
import { MessageComponent } from './SettingsMyData/message/message.component';
import { LoginAppUserComponent } from './SettingsMyData/login-app-user/login-app-user.component';
import { NavBarComponent } from './Home/nav-bar/nav-bar.component';
import { DashbordAdminComponent } from './Home/dashbord-admin/dashbord-admin.component';
import { AddUsersComponent } from './Admin/add-users/add-users.component';
import { EditUsersrolesComponent } from './Admin/edit-usersroles/edit-usersroles.component';
import { DashbordFinalComponent } from './Admin/dashbord-final/dashbord-final.component';
import { UsersComponent } from './Admin/users/users.component';
import { UserRoleComponent } from './Admin/user-role/user-role.component';
import { AddDoctorAdminComponent } from './Admin/add-doctor-admin/add-doctor-admin.component';

import { AddHospitalAdminComponent } from './Admin/add-hospital-admin/add-hospital-admin.component';
import { ViewHospitalAdminComponent } from './Admin/view-hospital-admin/view-hospital-admin.component';
import { CreatAccountTabbiComponent } from './Home/creat-account-tabbi/creat-account-tabbi.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomersComponent } from './albaseet/add-customers/add-customers.component';
import { ViewCustomersComponent } from './albaseet/view-customers/view-customers.component';

import { AddProductsComponent } from './albaseet/add-products/add-products.component';
import { ViewProductsComponent } from './albaseet/view-products/view-products.component';
import { ChartlistComponent } from './albaseet/chartlist/chartlist.component';
import { RequstComponent } from './albaseet/requst/requst.component';
import { AddrequstComponent } from './albaseet/addrequst/addrequst.component';
import { InviceComponent } from './albaseet/invice/invice.component';
import { AddInviceComponent } from './albaseet/add-invice/add-invice.component';
import { PymontComponent } from './albaseet/pymont/pymont.component';
import { DashboraHomeComponent } from './albaseet/dashbora-home/dashbora-home.component';
import { DetialsPaymontComponent } from './albaseet/detials-paymont/detials-paymont.component';
;




// angular mat






@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavMenuComponent,
    FooterMenuComponent,
    TipsComponent,
    VideoTipesComponent,
    DetainDoctComponent,
    DetanavComponent,
    DoctorconltingComponent,
    HomeQusationComponent,
    FreeQustionComponent,
    HealthcareComponent,
    ChooseRegisterComponent,
    DoctorRegisterComponent,
    LoginComponent,
    RegisterUserComponent,
    HospitalVeiwdatainComponent,
    HospitalVeiwInfoComponent,
    DoctorInfoComponent,
    ViewInfoComponent,
    ViewAllDoctorComponent,
    ViewInfoDocterComponent,
    HospitalBookingInfoOneComponent,
    HospitalBookingInfoTwoComponent,
    ViewAllDapertmentComponent,
    ViewBlogsComponent,
    HomeSettingsComponent,
    ViewHospitalDoctorSettingComponent,

    AddDapertmentComponent,
    AddSplicationComponent,
    AddSplicationHospitalComponent,
    AddAppointmentHospitalComponent,
    AddAppointmentDayComponent,
    AddDoctorHospitalComponent,
    MySettingsComponent,
    ProfileSetupHospitalComponent,
    AddHospitalsDataComponent,
    AddDoctorsComponent,
    ViewBookingHospitalComponent,
    ViewBookingHospitalNewComponent,
    ViewBookinPatientComponent,
    LocationComponent,
    PhoneInformationComponent,
    AddQualificationsDoctorComponent,
    MessageComponent,
LoginAppUserComponent,
NavBarComponent,
DashbordAdminComponent,
AddUsersComponent,
EditUsersrolesComponent,
DashbordFinalComponent,
UsersComponent,
UserRoleComponent,
AddDoctorAdminComponent,

AddHospitalAdminComponent,
ViewHospitalAdminComponent,
CreatAccountTabbiComponent,
CustomersComponent,
AddCustomersComponent,
ViewCustomersComponent,

AddProductsComponent,
ViewProductsComponent,
ChartlistComponent,
RequstComponent,
AddrequstComponent,
InviceComponent,
AddInviceComponent,
PymontComponent,
DashboraHomeComponent,
DetialsPaymontComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,



    HttpClientModule,
    ReactiveFormsModule,

    // NgxPaginationModule,
    BrowserAnimationsModule,
 


  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
