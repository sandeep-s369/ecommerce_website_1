import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Review } from '../review';
import { Router } from '@angular/router';
import { LoginsuccessComponent } from '../loginsuccess/loginsuccess.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
reviews:Review[]=[];
  constructor(private service:AdminService,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.getReviews();
  }
  
  private getReviews(){
      this.service.getReviewsList().subscribe(data=>{
        this.reviews=data;
      });
  }

  updateReview(id : number){
    this.router.navigate(['/updateReview', id]);
  }

  deleteReview(id: number){
      
    
  }
  
  logoutAdmin(){
       this.authService.adminLogout();
       this.router.navigate(['/adminLogin'])
  }



}
