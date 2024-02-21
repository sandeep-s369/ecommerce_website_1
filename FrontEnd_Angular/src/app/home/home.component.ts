import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Review } from '../review';
import { Product } from '../product';
import { ReviewService } from '../review.service';
import { ProductService } from '../product.service';
import { RegistrationService } from '../registration.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalProducts:any
  totalReviews:any
  totalUsers:any

  constructor(private homeSerive:HomeService) { }

  ngOnInit(): void {
     this.homeSerive.getUserList().subscribe(data=>{
      this.totalUsers=data
     })
     this.homeSerive.getProductList().subscribe(data=>{
      this.totalProducts=data
     })
     this.homeSerive.getReviewList().subscribe(data=>{
      this.totalReviews=data
     })
  }



   homePageImage:string='./assets/images/EcommerceHomePage.png';
}
