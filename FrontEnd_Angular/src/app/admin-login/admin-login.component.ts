import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ReviewService } from '../review.service';
import { Admin } from '../admin';
import { AdminLoginService } from '../admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin=new Admin()
  msg:any
  
  constructor(private _service:AdminLoginService, private _route:Router,private authService:AuthService,private reviewServie:ReviewService) { }

  ngOnInit(): void {
  }

  adminLogin(){
    this._service.loginAdminFromRemote(this.admin).subscribe(
      data=>{
       console.log("response received");
       this.authService.adminLogin();
       
       this._route.navigate(['/admin'])
      },
      error=>{
        
       console.log("exception occured");
       
       this.msg="Bad credentials, please enter valid emailid and password";
       this.authService.adminLogout();
     }
    );
 }



}
