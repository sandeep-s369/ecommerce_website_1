import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegistrationService } from '../registration.service';
import { ReviewService } from '../review.service';
import { User } from '../user';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user =new User();
msg='';

  constructor(private _service:RegistrationService, private _route:Router,
    private authService:AuthService,private reviewServie:ReviewService,
    private sharedService:SharedService) { }
  
  ngOnInit(): void {
  }

  loginUser(){
     this._service.loginUserFromRemote(this.user).subscribe(
       data=>{
        console.log("response received");
        this.authService.login();
        console.log(this.user.emailId);
        this._route.navigate(['/loginsuccess'])
        
        this.sendEmailFromToOther()

       },
       error=>{
        console.log("exception occured");
        this.authService.logout();
        this.msg="Bad credentials, please enter valid emailid and password";
      }
     );
  }

  
  sendEmailFromToOther(){
      this.sharedService.emailFromLoginComponent(this.user.emailId)
  }
  



}
