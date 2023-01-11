import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.css']
})
export class DashbordAdminComponent implements OnInit {
  isUser!:boolean;
  isAddUser!:boolean;
  isAddUserRoleList!:boolean;
  ishospitalList:boolean;
  isDoctorsList:boolean;
    constructor() { }
    ngOnInit(): void {

      $(document).ready(function () {
          $('#sidebarCollapse').on('click', function () {
              $('#sidebar').toggleClass('active');
          });
      });
      this.isUser=false;
      this.isAddUser=false;
      this.isAddUserRoleList=false;
      this.ishospitalList=false;
      this.isDoctorsList=false;
      if(sessionStorage.getItem("edituserRoles")){
        this.checkUsersRoleList();
        sessionStorage.removeItem("edituserRoles");
      }

    }
    checkUsers():boolean{
      this.isAddUser=false;
     this. isAddUserRoleList=false;
  return this.isUser=true;
    }
    Adduser(){
      this.isUser=false;
      this. isAddUserRoleList=false;
      return this.isAddUser=true;
    }
    checkUsersRoleList():boolean{
      this.isAddUser=false;
      this.isUser=false;;
  return this.isAddUserRoleList=true;
    }
    checkhospitalList():boolean{
      this.isAddUser=false;
      this.isUser=false;
      this.isAddUserRoleList=false;
      this.isDoctorsList=false;
  return this.ishospitalList=true;
    }
    checkDoctorsList():boolean{
      this.isAddUser=false;
      this.isUser=false;
      this.isAddUserRoleList=false;
      this.ishospitalList=false;
  return this.isDoctorsList=true;

    }



  }


