import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  products:any

  loginedUserEmailId:string='';
  searchString:string=''
  constructor(private productService:ProductService,private router:Router,
    private sharedService:SharedService) { }

  ngOnInit(): void {

      this.loginUserEmail();
  }
  
  callProduct(){
     console.log(this.searchString);
     this.productService.getProductsBySearchString(this.searchString).subscribe(data=>{
        
          this.products=data;
          console.log(data);
     },
     error=>{
      console.log("exception occured");
     })
  }

  
  callReviews(productCode:string){
      this.router.navigate(['/showReviews',productCode]);
  }


  loginUserEmail(){

    this.loginedUserEmailId=this.sharedService.emailSendToOther();
  }



}
