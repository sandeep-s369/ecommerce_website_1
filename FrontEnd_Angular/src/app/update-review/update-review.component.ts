import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { ActivatedRoute,Router } from '@angular/router';
import {Inject} from '@angular/core';
import { Review } from '../review';

@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css']
})
export class UpdateReviewComponent implements OnInit {

  id:number=0;
  review:Review=new Review();
  constructor(private service:AdminService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getReviewById(this.id).subscribe(data=>{
      this.review=data;
    },error=>console.log(error)
    );
  }
  onSubmit(){
      this.service.updatReview(this.id,this.review).subscribe(data=>{
        this.goToReviewList();
      }
      ,error=>console.log(error)
      );
    }
    
    goToReviewList(){
      this.router.navigate(['/admin']);
    }
    
  
}
