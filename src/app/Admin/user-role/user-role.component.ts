import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleModel } from 'src/app/model/RoleModels';
import { AdminService } from 'src/app/Myservice/admin.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  constructor(private service:AdminService,
    private router:Router) { }
  userRoles!:RoleModel[];

  ngOnInit(): void {
    this.userRoles=[];
    this.GetUserRole();
  }
GetUserRole(){
  this.service.GetUserRolse().subscribe(ss=>{
   this.userRoles=ss;
  },
  err=>{
    console.log(err);
  })

  
}
edituserRole(userId:string,roleId:string){
this.router.navigate(['EditUsersroles',userId,roleId]);
}
}
