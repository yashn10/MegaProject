import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonationCampComponent } from './donation-camp/donation-camp.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './donor/services.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { OrdermedicineComponent } from './ordermedicine/ordermedicine.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LogoutcampComponent } from './logoutcamp/logoutcamp.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'',
    component:HomeComponent
  },

  {
    path:'dashboard',
    component:DashboardComponent
  },

  {
    path:'about',
    component:AboutComponent
  },

  {
    path:'contact',
    component:ContactComponent
  },

  {
    path:'donor',
    component:ServicesComponent
  },

  {
    path:'receiver',
    component:ReceiverComponent
  },
  
  {
    path: 'admin',
    component: AdminComponent
  },

  {
    path: 'donation-camp',
    component: DonationCampComponent
  },

  {
    path: 'registration',
    component: RegistrationComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'logout',
    component: LogoutComponent
  },

  {
    path: 'pharmacy',
    component: PharmacyComponent
  },

  {
    path: 'ordermedicine',
    component: OrdermedicineComponent
  },

  {
    path: 'doctor',
    component: DoctorComponent
  },

  {
    path: 'logoutcamp',
    component: LogoutcampComponent
  },

  {
    path: 'information',
    component: InformationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
