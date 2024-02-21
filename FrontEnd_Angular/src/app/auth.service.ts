import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean=false;
  adminLoggedIn:boolean=false;
  constructor() { }
  login(){
      this.loggedIn=true;
  }
  logout(){
      this.loggedIn=false;
  }
  isAuthenticated(){
    return this.loggedIn;
  }
  

  adminLogin(){
      this.adminLoggedIn=true;
  }
  adminLogout(){
      this.adminLoggedIn=false;
  }
  isAdminAuthenticated(){
      return this.adminLoggedIn;
  }

}
