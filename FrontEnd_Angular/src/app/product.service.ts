import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseURL = "http://localhost:8089/products";
  constructor(private httpClient: HttpClient) { }

  getProductsList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  public getProductsBySearchString(searchString:string):Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/${searchString}`);
  }

}
