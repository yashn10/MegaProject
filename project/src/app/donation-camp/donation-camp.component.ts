import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CampService } from '../services/camp.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-donation-camp',
  templateUrl: './donation-camp.component.html',
  styleUrls: ['./donation-camp.component.scss']
})
export class DonationCampComponent implements OnInit {

  @ViewChild('userForm')
  userForm!: NgForm;
  campForm: FormGroup;
  searchtext: any;
  campList: any = [];
  isclicked = 'yes';
  ispass = '';
  isAdmin = false;


  constructor(
    private formbuilder: FormBuilder,
    private campService: CampService,
    private authService: AuthService
  ) {
    this.campForm = this.formbuilder.group({
      campowner: [''],
      email: [''],
      phone: [''],
      password: [''],
      city: [''],
      state: ['']
    });
  }


  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.loadCamps();
  }


  loadCamps() {
    this.campService.getAllCamps().subscribe({
      next: (res: any) => {
        this.campList = res.data || res;
      },
      error: (err) => {
        console.log('Error loading camps:', err);
      }
    });
  }


  addcamp(data: any) {
    this.campService.createCamp(data).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Camp Registered Successfully',
          showConfirmButton: true,
        });
        this.campList.push(res);
        this.loadCamps();
        if (this.userForm) {
          this.userForm.reset();
        }
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Register Camp',
          text: err.error?.message || 'Something went wrong!',
          showConfirmButton: true,
        });
        console.log(err);
      }
    });
  }


  register() {
    Swal.fire({
      title: 'Register for this Camp?',
      text: 'Your contact information will be shared with the camp organizer so they can reach out to you.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#c62828',
      cancelButtonColor: '#9e9e9e',
      confirmButtonText: '<i class="fas fa-check"></i> Yes, Register',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          html: 'You have been registered for this camp.<br><small style="color:#616161;">The camp organizer will contact you soon with further details.</small>',
          confirmButtonColor: '#c62828'
        });
      }
    });
  }


  camps() {
    this.isclicked = 'no';
  }

  goback() {
    this.isclicked = 'yes';
  }


  clear() {
    this.userForm.reset();
  }

}