import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Review } from './review';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

   private promotedUrl='http://localhost:8089/promotedReviews';
     public reviewProductFromRemote(review:Review):Observable<any>{
        return this.http.post<any>(`http://localhost:8089/reviewProducts`,review)
    }

     public allPromotedreviews(productCode:string):Observable<Review[]>{
      return this.http.get<Review[]>(`${this.promotedUrl}/${productCode}`)
     }
   
  handleError(error: Response){
    
  }



}
