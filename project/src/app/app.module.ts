import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './donor/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { DonationCampComponent } from './donation-camp/donation-camp.component';
import { HttpClientModule } from '@angular/common/http';
import { ReceiverComponent } from './receiver/receiver.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogoutComponent } from './logout/logout.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { OrdermedicineComponent } from './ordermedicine/ordermedicine.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LogoutcampComponent } from './logoutcamp/logoutcamp.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    DashboardComponent,
    AdminComponent,
    DonationCampComponent,
    ReceiverComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    PharmacyComponent,
    OrdermedicineComponent,
    DoctorComponent,
    LogoutcampComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
