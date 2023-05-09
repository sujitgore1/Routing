import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() {
    this.getData()
   }

  private defaultMessage = new BehaviorSubject("This is default message from service")
  public messageInstance = this.defaultMessage.asObservable()

  setData(data:any){
    this.defaultMessage.next(data)
  }

  getData(){
    return this.messageInstance
  }
}
