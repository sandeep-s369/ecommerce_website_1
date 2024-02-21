import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
  
  loginedUserEmailId:string='';
  products: Product[]=[];
  constructor(private productService:ProductService,private router:Router,
    private authService:AuthService,private sharedService:SharedService) { }

  ngOnInit(): void {
    this.getProducts();
    this.loginUserEmail();
  }
  private getProducts(){
    this.productService.getProductsList().subscribe(
      data=>{this.products=data;
    });
  }
  logoutUser(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  loginUserEmail(){

    this.loginedUserEmailId=this.sharedService.emailSendToOther();
  }



}
