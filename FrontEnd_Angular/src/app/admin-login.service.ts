import { Injectable } from '@angular/core';
import { Admin } from './admin';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AdminLoginService {

  constructor(private _http:HttpClient) { }
   
  public loginAdminFromRemote(admin:Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8089/adminUser",admin);
}

handleError(error: Response){
      
}

}
