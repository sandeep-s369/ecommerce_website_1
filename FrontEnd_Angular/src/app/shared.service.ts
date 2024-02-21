import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  sharedUserName:string=''
  sharedEmailId:string=''
  constructor() { }

  
  emailFromLoginComponent(email:string){
        this.sharedEmailId=email
        
  }
  



  emailSendToOther(){
       return this.sharedEmailId;
  }
  


}
