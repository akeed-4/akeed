import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { edituserRoles } from 'src/app/model/edituserRoles';
import { Rolemodell } from 'src/app/model/Rolemodel';
import { Users } from 'src/app/model/users';
import { AdminService } from 'src/app/Myservice/admin.service';

@Component({
  selector: 'app-edit-usersroles',
  templateUrl: './edit-usersroles.component.html',
  styleUrls: ['./edit-usersroles.component.css']
})
export class EditUsersrolesComponent implements OnInit {
  registaration1!:FormGroup;
  userId!:string;
  roleId!:any;
  rol!:Rolemodell[];
  editusrRole!:edituserRoles;
  forms!:Users;
userName!:string;
  titel!:string;
  constructor(private fd:FormBuilder,
    private Activerot:ActivatedRoute,private rout:Router
    ,private service:AdminService) { }

  ngOnInit(): void {
    this.editusrRole={
      userId:'',
      roleId:''
    }
    this.registaration1=this.fd.group({
      userName:['',Validators.required],
      roleName:['',Validators.required],

    })

    this.Activerot.paramMap.subscribe(param=>{
      var userId=param.get('id');
      var roleId=param.get('id1');
      if(userId&&roleId){

        this.service.Getuseres(userId).subscribe(succss=>{
this.userId=succss.id;

this.userName=succss.userName;
   this.roleId=roleId;

   this.addRolesusers();



        },err=>{console.log(err.error)});
        this.service.GetAllRoles().subscribe(suu=>{
      this.rol=suu;

        },err=>{console.log(err)});

      }else{
this.rout.navigate(['notfound']).then(x=>{window.location.reload()});
      }
    })
  }

  editRoles(){
if(this.userId&&this.roleId&&this.registaration1.valid){
  this.editusrRole.roleId=this.roleId;
  this.editusrRole.userId=this.userId;

  this.service.EditUserRole(this.editusrRole).subscribe(cc=>{

sessionStorage.setItem('edituserRoles',"true");
this.rout.navigate(['DashbordFinal']);

  },err=>{console.log(err.error)})
}
  }
  onchangeRoles(){
    this.roleId=this.registaration1.value.roleName;

  }
  addRolesusers(){
    this.registaration1.setValue({
      userName:this.userName,
      roleName:this.roleId,


    });
  }
}
