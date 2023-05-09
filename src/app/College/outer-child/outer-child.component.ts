import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outer-child',
  templateUrl: './outer-child.component.html',
  styleUrls: ['./outer-child.component.css']
})
export class OuterChildComponent {
 @Input() valueFromParent:any

 public outerChildData:any="Data from outer child to parent"



 outerChildMethod(){
  return this.outerChildData
 }
}
