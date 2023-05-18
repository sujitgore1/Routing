import { Component } from '@angular/core';
import { RouterService } from '../Services/router.service';
import { Router } from '@angular/router';
import { PatchService } from '../student-section/patch.service';
import { NgModel } from '@angular/forms';
import { ConditionService } from 'src/app/Guards/condition.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public idd:any
  public un:any
  public ps:any
  public serviceData : any
  public showSubmit : boolean = true
  public showUpdate : boolean = false





  constructor(private api : RouterService, private route : Router,private patch:PatchService,private condition : ConditionService){
    this.getStudData()
  }

  onSubmit(formData:any){
    console.log(formData.value)
    this.api.storeStudentData(formData.value).subscribe((res)=>{
      console.log(res)
    })
    this.navigateToStud()
  }

  getStudData(){
    this.api.getStudentData().subscribe((res)=>{
      console.log(res)
    })
  }

  navigateToStud(){
    // confirm('Do you want to save username password')
    this.route.navigateByUrl('studsec')
    
    this.condition.login()
    if(this.condition.isLoggedIn == true){
      alert("You have logged in successfully")
    }
  }

  patchData(){
    this.serviceData = this.patch.recieveData
    this.idd = this.patch.id
    this.un = this.patch.un
    this.ps = this.patch.ps
    this.showSubmit = this.patch.showSubmit
    this.showUpdate = this.patch.showUpdate
  }

  ngAfterContentInit(){
    this.patchData()
    console.log(this.serviceData)
  }

  updateData(data:any){
    console.log(data.value)
    this.api.updateData(data.value).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
