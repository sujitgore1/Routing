import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inner-child',
  templateUrl: './inner-child.component.html',
  styleUrls: ['./inner-child.component.css']
})
export class InnerChildComponent {
 @Input() dataFromParent:any
 @Output() childEvent:any = new EventEmitter<any>();
 public childData:any="Data from Child to Parent"






 postFromChildToParent(){
  console.log("Child Component")
  this.childEvent.emit(this.childData)
 }
}
