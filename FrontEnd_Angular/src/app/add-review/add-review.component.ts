import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  review=new Review();
  msg:any='';
  loginedUserEmailId:string=''
  

  constructor(private service:ReviewService,private router:Router,
    private route:ActivatedRoute,private registerService:RegistrationService,
    private sharedService:SharedService) { }

  ngOnInit(): void {
      this.loginUserEmail();
      this.review.emailId=this.loginedUserEmailId;
  }
  
  

  reviewProducts(){
    this.service.reviewProductFromRemote(this.review).subscribe(
     data=>{
       console.log("review received");
       this.router.navigate(['/loginsuccess'])
     },
     error=>{
      console.log("exception occured");
      this.msg=error.error;
      window.alert('review already given');
      this.router.navigate(['/loginsuccess']);

     }
    )   
 }   


   loginUserEmail(){

     this.loginedUserEmailId=this.sharedService.emailSendToOther();
   }



}
