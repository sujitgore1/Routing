import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {

  constructor() { }
  isLoggedIn : boolean = false

  login(){
    this.isLoggedIn = true
  }

  logOut(){
    this.isLoggedIn = false
  }
  
  authenticate(){
    return this.isLoggedIn
  }
}
