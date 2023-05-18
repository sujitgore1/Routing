import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatchService {

  constructor() {
    
   }

   public showSubmit : boolean = true
   public showUpdate : boolean = false
   public recieveData:any
   public id:any
   public un:any
   public ps:any
   
   setData(data:any){
    this.id = data.id
    this.un = data.uname
    this.ps = data.pass
    console.log(data)
    this.recieveData = data
   }
}
