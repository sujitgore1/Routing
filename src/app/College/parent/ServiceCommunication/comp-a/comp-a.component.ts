import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {
  
  constructor(private serviceAccess :CommunicationService){
    this.getDataFromService()
  }
  dataFromA:any="Set data from A component"
  storeData:any







  setFromCompA(){
    this.serviceAccess.setData(this.dataFromA)
  }

  getDataFromService(){
    this.serviceAccess.getData().subscribe((res)=>{
      this.storeData = res
      console.log(this.storeData)
    })
  }
}
