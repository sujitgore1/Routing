import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatchService {

  constructor() {
    this.setData
   }

   public recieveData:any
   public un:any
   public ps:any

   setData(data:any){
    data.uname = this.un
    data.pass = this.ps
    console.log(data)
    return this.recieveData = data
   }
}
