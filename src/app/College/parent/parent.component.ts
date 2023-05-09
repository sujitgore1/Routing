import { Component, ViewChild } from '@angular/core';
import { OuterChildComponent } from '../outer-child/outer-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
@ViewChild(OuterChildComponent) outerChildData:any
  public data:any="Data post from parent to inner Child"
  public value:any="Data post from parent to outer child"
  public recieveChild:any
  public recieveOuterChild:any

  fetchChild(event:any){
    console.log(event)
    this.recieveChild = event
  }

  ngOnInit(){
    console.log(this.outerChildData)
  }
  
  ngAfterViewInit(){
    this.recieveOuterChild = this.outerChildData.outerChildData + this.outerChildData.outerChildMethod()
    console.log(this.recieveOuterChild)
  }
}
