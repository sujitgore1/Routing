import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerServicesComponent } from '../customer-services/customer-services.component';
import { NotificationsComponent } from '../notifications/notifications.component';

const route : Routes = [
  {path:'customer',component:CustomerServicesComponent},
  {path:'',component:NotificationsComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class FeatureModule { }
