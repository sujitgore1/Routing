import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConditionService } from './Guards/condition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';

  constructor(private route : Router, private condition : ConditionService){

  }
  navigateToStud(){
    this.route.navigateByUrl('studsec')
  }

  navigateToLogin(){
    this.route.navigate(['login'])
  }
  
  dialogueForNotifications(){
    alert("This is component from feature module")
  }

  logOut(){
    this.condition.logOut()
  }

  showMessage(){
    if(this.condition.isLoggedIn == true){
      alert("You have logged in successfully")
    }else{
      alert("You have to login first")
      this.route.navigateByUrl('login')
    }
  }
}
