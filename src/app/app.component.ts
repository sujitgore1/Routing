import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';

  constructor(private route : Router){

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
}
