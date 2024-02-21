import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl='http://localhost:8089/reviews';
  constructor(private httpClient: HttpClient) { }
  
  getReviewsList():Observable<Review[]>{
       return this.httpClient.get<Review[]>(`${this.baseUrl}`);
  }

  updatReview(id: number, review: Review): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, review);
  }

  getReviewById(id: number): Observable<Review>{
    return this.httpClient.get<Review>(`${this.baseUrl}/${id}`);
  }

}
