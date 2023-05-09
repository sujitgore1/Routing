import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route:Router){

  }
  navigateToStaff(){
    this.route.navigateByUrl('stafsec')
  }
  
  navigateToStud(){
    this.route.navigateByUrl('studsec')
  }

  navigatToLogin(){
    this.route.navigateByUrl('login')
  }
  navigateToCompAsub(){
    this.route.navigateByUrl('componentA')
  }
  navigateToCompBsub(){
    this.route.navigateByUrl('componentB')
  }

  dialogueForNotifications(){
    alert("This is component from feature module")
  }
}
