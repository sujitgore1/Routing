import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './College/home/home.component';
import { StaffSectionComponent } from './College/staff-section/staff-section.component';
import { StudentSectionComponent } from './College/student-section/student-section.component';
import { LoginComponent } from './College/login/login.component';
import { AboutUsComponent } from './College/about-us/about-us.component';
import { ErrorComponent } from './College/error/error.component';
import { ParentComponent } from './College/parent/parent.component';
import { CompAComponent } from './College/parent/ServiceCommunication/comp-a/comp-a.component';
import { CompBComponent } from './College/parent/ServiceCommunication/comp-b/comp-b.component';
import { AuthguardGuard } from './Guards/authguard.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"stafsec",component:StaffSectionComponent},
  {path:"studsec",component:StudentSectionComponent,canActivate : [AuthguardGuard]},
  {path:"login",component:LoginComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"datacommu",component:ParentComponent},
  {path:"componentA",component:CompAComponent},
  {path:"componentB",component:CompBComponent},
  {
    path:"feature", loadChildren:()=>import('./LazyLoading/feature/feature.module').then(mod=>mod.FeatureModule)
  },
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
