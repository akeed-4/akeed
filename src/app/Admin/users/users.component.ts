import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/users';
import { AdminService } from 'src/app/Myservice/admin.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service:AdminService,private route:Router) { }
users!:Users[];
ids!:any[];
id!:any;;
c!:any;
checked!:boolean;
num!:number;
  ngOnInit(): void {
    this.c=null;
    this.users=[];
    this.id='';
    this.ids=[];
    this.service.GetAllUsers().subscribe((list)=>{
this.users=list;
    },err=>{
      console.log(err);
    });
    this.num=0;
  }
  iditUser(id:string){
    this.route.navigate(['/EditUsers',id]);

  }

  selectAll(){
    var tbl=$('#tbl');
    var header=tbl.find('thead .ckheader');
    var item =tbl.find('tbody  .ckitem');
    $(function(){
      item.on('change',function(){
        if($(this).is(':checked')){
          $(this).closest('tr').addClass('NewRowColor');
        }
        else{
          $(this).closest('tr').removeClass('NewRowColor');
        }
      });

      header.change(function(){

item.prop("checked");
item.trigger('check');
if($(this).is(':checked')){
  $(item).closest('tr').addClass('NewRowColor');
}
else{
  $(item).closest('tr').removeClass ('NewRowColor');
}
      });
    }


    );
  }
  GetAll(){

  }
  isDelet(){
    var checkex=document.getElementsByClassName("ckitem");
    if(checkex.length>0){
      for(let i=0;i<checkex.length;i++){
        if($(checkex[i]).is(":checked")){
          return true;

        }
      }

    }
    return false;
  }
  Deletcount(){
    var count=$('.ckitem:checked').length;
    this.num=count;
  }
  Deletconfirm(){
    var checkex=document.getElementsByClassName("ckitem");
    if(checkex.length>0){

      for(let i=0;i<checkex.length;i++){
        if($(checkex[i]).is(":checked")){
         this.id=$(checkex[i]).val();
      this.ids.push(this.id);

        }
        }

        this.service.DeletUSer(this.ids).subscribe(xx=>{
          $('#btnclose').trigger('click');
          alert('تم الحذف بنجاح')

this.ngOnInit();
        },err=>{
          console.log(err);
        })

      }

  }
}

