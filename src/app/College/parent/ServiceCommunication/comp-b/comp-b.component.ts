import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {
  constructor(private serviceAccess:CommunicationService){
    this.getDataFromService()
  }

  public dataFromB:any="This data has been set from B component"
  public storeData:any






  setFromComponentB(){
    this.serviceAccess.setData(this.dataFromB)
  }

  getDataFromService(){
    this.serviceAccess.getData().subscribe((res)=>{
      this.storeData = res
      console.log(this.storeData)
    })
  }
}
