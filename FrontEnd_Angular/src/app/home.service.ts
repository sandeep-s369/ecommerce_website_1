import { Injectable } from '@angular/core';
import { User } from './user';
import { Product } from './product';
import { Review } from './review';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  userUrl="http://localhost:8089/users"
  productUrl="http://localhost:8089/products"
  reviewUrl="http://localhost:8089/reviews"

  constructor(private httpClient:HttpClient) { }

  
  getUserList(){
    return this.httpClient.get(this.userUrl)
  }

  getProductList(){
    return this.httpClient.get(this.productUrl)
  }

  getReviewList(){
    return this.httpClient.get(this.reviewUrl)
  }
}
