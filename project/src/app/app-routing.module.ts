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
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { OrdermedicineComponent } from './ordermedicine/ordermedicine.component';
import { DoctorComponent } from './doctor/doctor.component';
import { InformationComponent } from './information/information.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'donor',
    component: ServicesComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'receiver',
    component: ReceiverComponent,
    canActivate: [AuthGuard]
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
    path: 'information',
    component: InformationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
