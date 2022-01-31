import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:''
  };
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username =='' || this.user.username==null){
      this.snack.open('Username is required!!!', '',{
        duration:3000
      })
      return;
    } else if(this.user.password =='' || this.user.password==null){
      this.snack.open('Password is required!!!', '',{
        duration:3000
      })
      return;
    } else if(this.user.firstname =='' || this.user.firstname==null){
      this.snack.open('Firstname is required!!!', '',{
        duration:3000
      })
      return;
    } else if(this.user.lastname =='' || this.user.lastname==null){
      this.snack.open('lastname is required!!!', '',{
        duration:3000
      })
      return;
    } else if(this.user.email =='' || this.user.email==null){
      this.snack.open('Email is required!!!', '',{
        duration:3000
      })
      return;
    } else if(this.user.phone =='' || this.user.phone==null){
      this.snack.open('Phone is required!!!', '',{
        duration:3000
      })
      return;
    }

    //adduser
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Success', 'User is Succesfully Register', 'success');
      },
      (error)=>{
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        
        })
      //  this.snack.open('Something went wrong!!!', '',{
       //   duration:3000
      //  })
      }
    )
  }
}
