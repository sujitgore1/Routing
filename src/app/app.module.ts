import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './College/home/home.component';
import { StaffSectionComponent } from './College/staff-section/staff-section.component';
import { StudentSectionComponent } from './College/student-section/student-section.component';
import { LoginComponent } from './College/login/login.component';
import { AboutUsComponent } from './College/about-us/about-us.component';
import { ErrorComponent } from './College/error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './College/parent/parent.component';
import { OuterChildComponent } from './College/outer-child/outer-child.component';
import { InnerChildComponent } from './College/parent/inner-child/inner-child.component';
import { CompAComponent } from './College/parent/ServiceCommunication/comp-a/comp-a.component';
import { CompBComponent } from './College/parent/ServiceCommunication/comp-b/comp-b.component';
import { NotificationsComponent } from './LazyLoading/notifications/notifications.component';
import { CustomerServicesComponent } from './LazyLoading/customer-services/customer-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffSectionComponent,
    StudentSectionComponent,
    LoginComponent,
    AboutUsComponent,
    ErrorComponent,
    ParentComponent,
    OuterChildComponent,
    InnerChildComponent,
    CompAComponent,
    CompBComponent,
    NotificationsComponent,
    CustomerServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
