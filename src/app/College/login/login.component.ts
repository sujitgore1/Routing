import { Component, ViewChild } from '@angular/core';
import { RouterService } from '../Services/router.service';
import { Router } from '@angular/router';
import { PatchService } from '../student-section/patch.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 @ViewChild("frm") form:any = NgModel
  public un:any
  public ps:any






  constructor(private api : RouterService, private route : Router,private patch:PatchService){
    this.getStudData()
  }

  onSubmit(formData:any){
    console.log(formData.value)
    this.api.storeStudentData(formData.value).subscribe((res)=>{
      console.log(res)
    })
  }

  getStudData(){
    this.api.getStudentData().subscribe((res)=>{
      console.log(res)
    })
  }

  navigateToStud(){
    // confirm('Do you want to save username password')
    this.route.navigateByUrl('studsec')
    this.patch.un = this.un
    this.patch.ps = this.ps
  }
}
