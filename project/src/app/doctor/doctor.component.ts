import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AppointmentService } from '../services/appointment.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  yesappointment = '';
  yesprescription = '';

  // Appointment form data
  appointment_data: any = {
    fullname: '',
    email: '',
    phone: '',
    bloodgroup: '',
    age: null,
    gender: '',
    preferredDate: '',
    timeSlot: '',
    message: '',
    doctorName: ''
  };

  selectedDoctor = '';

  constructor(
    private appointmentService: AppointmentService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  appointment(doctorName?: string) {
    this.yesappointment = 'yes';
    this.yesprescription = '';
    this.selectedDoctor = doctorName || '';
    this.appointment_data.doctorName = this.selectedDoctor;
  }

  prescription() {
    this.yesprescription = 'yes';
    this.yesappointment = '';
  }

  submitAppointment() {
    if (!this.authService.isLoggedIn()) {
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'Please login to book an appointment.',
        confirmButtonColor: '#c62828'
      });
      return;
    }

    this.appointmentService.createAppointment(this.appointment_data).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Appointment Booked!',
          html: `Your appointment with <strong>${this.selectedDoctor || 'a doctor'}</strong> has been scheduled.<br>Appointment ID: <code>${res.data?._id || 'N/A'}</code>`,
          confirmButtonColor: '#c62828'
        }).then(() => {
          this.yesappointment = '';
          this.appointment_data = {
            fullname: '', email: '', phone: '', bloodgroup: '',
            age: null, gender: '', preferredDate: '', timeSlot: '',
            message: '', doctorName: ''
          };
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Booking Failed',
          text: err.error?.message || 'Something went wrong. Please try again.',
          confirmButtonColor: '#c62828'
        });
      }
    });
  }

  submitPrescription() {
    Swal.fire({
      icon: 'success',
      title: 'Prescription Submitted!',
      text: 'Your symptoms have been recorded. A doctor will review and provide your prescription soon.',
      confirmButtonColor: '#c62828'
    });
  }
}
