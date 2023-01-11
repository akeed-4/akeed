import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-final',
  templateUrl: './dashbord-final.component.html',
  styleUrls: ['./dashbord-final.component.css']
})
export class DashbordFinalComponent implements OnInit {

  
  

  constructor() { }

  isUserList: boolean;
  isAddUser: boolean;
  isproductslist: boolean;
  isAddhospital: boolean;
  isDepartmentList: boolean;
  isAdddepartment: boolean;
  isAddPatient: boolean;
  isUserRoleList: boolean;
  isPatientList: boolean;
  isCustomerList: boolean;
  isAddcustomer: boolean;
  isInvice:boolean;
  isaaddOreder:boolean;
  isdivbar:boolean;
  isinvicese:boolean;
  ispaymont:boolean
ispaymontinvice:boolean

  ngOnInit(): void {
    this.isdivbar=false;
    this.isAddUser = false;
    this.isaaddOreder=false;
    this.isAddhospital = false;
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isinvicese=false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    this.isproductslist=false;
   this. ispaymont=false

    


    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    });


     if(sessionStorage.getItem("hospital"))
      {
        this.Checkproduct();
        sessionStorage.removeItem("hospital");

      }else if(sessionStorage.getItem("patient"))
      {
        this.CheckPatient();
        sessionStorage.removeItem("patient");

      }else if(sessionStorage.getItem("doctor"))
      {
        this.Checkcustomer();
        sessionStorage.removeItem("doctor");

      }else if(sessionStorage.getItem("users"))
      {
        this.CheckUser();
        sessionStorage.removeItem("users");

      }


  }

  CheckUser(): boolean {
    this.isAddUser = false
    this.isAddhospital = false;
    this.isAdddepartment = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isaaddOreder=false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    return this.isUserList = true;
  }

  CheckUserRoleList(): boolean {
    this.isAddUser = false
    this.isAddhospital = false;
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isPatientList = false;
    this.ispaymont=false;
    this.isAddPatient = false;
    this.isaaddOreder=false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    return this.isUserRoleList = true;
  }

  Checkproduct(): boolean {
    this.isInvice=false;
    this.isAddUser = false
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.ispaymont=false;
    this.isInvice=false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    this.isaaddOreder=false;
    this.ispaymont=false;
    this.isinvicese=false
    return this.isproductslist = true;
    
  }

  CheckDepartment(): boolean {
    this.isAddUser = false
    this.isAddhospital = false;
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isUserRoleList = false;
    this.ispaymont=false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isaaddOreder=false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    return this.isDepartmentList = true;
  
  }

  AddUser() {
    this.isInvice=false;
    this.isAddhospital = false;
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    this.isaaddOreder=false;
    return this.isAddUser = true;
  }
  Checkorder(){
    this.isInvice=false;
    this.isAddUser = false
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.ispaymontinvice=false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    this.isinvicese=false;
    this.isaaddOreder=false;
    this.ispaymont=false;
    
     return this.isInvice=true;
  }

  SelectAll(){}
  AddOrder(){
    this.isAddUser = false
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    this.ispaymontinvice=false;
     this.isAddhospital = false;
     this.ispaymont=false;
     this.isInvice=false;
     this.isinvicese=false;
     return this.isaaddOreder=true;
  }


  checkinvgice(){
    this.isInvice=false;
    this.isAddUser = false
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    this.isaaddOreder=false;
    this.ispaymontinvice=false;
    this.ispaymont=false;
    return this.isinvicese=true;
  }

  checkpeymont(){
    this.isInvice=false;
    this.isAddUser = false
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    this.isaaddOreder=false;
     this.isinvicese=false;
     this.ispaymontinvice=false;
     return this. ispaymont=true;
  }


  Addproducts() {
    this.isInvice=false;
    this.isAddUser = false
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    this.ispaymontinvice=false;
    this.isaaddOreder=false;
  this.ispaymont=false;
    return this.isAddhospital = true;
  }

  Checkcustomer(): boolean{
    this.isInvice=false;
    this.isaaddOreder=false;
    this.isAddUser = false
    this.isAddhospital = false;
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.ispaymont=false;
    this.isAddPatient = false;
    this.ispaymontinvice=false;
  
    return this.isCustomerList = true;
  }

  Addcustomer() {
    this.isInvice=false;
    this.isAddUser = false
    this.isAddhospital = false;
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isaaddOreder=false;
    this.isproductslist = false;
    this.ispaymont=false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isCustomerList = false;
    this.ispaymontinvice=false;
    return this.isAddcustomer = true;
  }

  Addinvice() {
    this.isInvice=false;
    this.isAddUser = false
    this.isAddhospital = false;
    this.isUserList = false;
    this.isaaddOreder=false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.ispaymont=false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    this.isinvicese=false;
    this.ispaymontinvice=false;
    return this.isAdddepartment = true;
  }

  checkpeymont1(){
    this.isInvice=false;
    this.isAddUser = false
    this.isAddhospital = false;
    this.isUserList = false;
    this.isaaddOreder=false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.ispaymont=false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    this.isinvicese=false;
     this.isAdddepartment = false;
     return this.ispaymontinvice=true;
  }
  CheckPatient(): boolean {
    this.isInvice=false;
    this.isAddUser = false
    this.isAddhospital = false;
    this.isaaddOreder=false;
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.ispaymont=false;
    this.isUserRoleList = false;
    this.isAddPatient = false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    return this.isPatientList = true;
  }

  AddPatient() {
    this.isAddUser = false
    this.isAddhospital = false;
    this.isaaddOreder=false;
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.ispaymont=false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    return this.isAddPatient = true;
  }

}
