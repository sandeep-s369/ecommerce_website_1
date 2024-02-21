import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';


@Component({
  selector: 'app-show-reviews',
  templateUrl: './show-reviews.component.html',
  styleUrls: ['./show-reviews.component.css']
})
export class ShowReviewsComponent implements OnInit {

  productCode:string=''
  Reviews:Review[]=[]
  averageRating:number=0;
  sum:number=0;
  count:number=0;
  totalReviews:number=0
  
  constructor(private service:ReviewService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productCode=this.route.snapshot.params['productCode'];
    this.service.allPromotedreviews(this.productCode).subscribe(data=>{
      this.Reviews=data;
    },error=>console.log(error)
    )
  }
  



  avg(){
    let additions:number = 0;
    for(let index=0; index<this.Reviews.length; index++){
        let temp:any=this.Reviews[index].rating
        additions+=temp;
      }
     
      return (additions/this.Reviews.length);
  }






}
