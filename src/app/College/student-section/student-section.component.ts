import { Component } from '@angular/core';
import { RouterService } from '../Services/router.service';
import { Router } from '@angular/router';
import { PatchService } from './patch.service';
import { ConditionService } from 'src/app/Guards/condition.service';

@Component({
  selector: 'app-student-section',
  templateUrl: './student-section.component.html',
  styleUrls: ['./student-section.component.css']
})
export class StudentSectionComponent {
  public recieveData:any
  public storeData:any
  constructor(private api :RouterService, private route :Router,private patch:PatchService,private condition:ConditionService){

    this.getLatestData()
  }
  
  getLatestData(){
    this.api.getStudentData().subscribe((res)=>{
      console.log(res)
      this.recieveData = res
    })
  }
  onDel(id:any){
    this.api.deleteStudentData(id).subscribe((res)=>{
      console.log(res)
    })
    this.getLatestData()
  }
  
  ngDoCheck(){
    if(this.condition.isLoggedIn == false){
      alert("You will be redirect to home page")
      this.route.navigateByUrl("")
    }
  }
  onUpdate(data:any){
    console.log(data)
    this.route.navigateByUrl('login')
    this.storeData = data
    this.patch.setData(data)
    this.patch.showSubmit = false
    this.patch.showUpdate = true
    // let updatedData = this.recieveData.find((res:any)=>{
    //   return res.id==data;
    // });
    // this.form.setValue({
    //   uname: updatedData.fname,
    //   pass: updatedData.lname,
    //   email: updatedData.email
    // })
    
  }








}
