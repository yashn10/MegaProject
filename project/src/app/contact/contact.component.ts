import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {


  @ViewChild('userForm')
  userForm!: NgForm;
  contactForm: FormGroup;
  contactList: any = [];
  index = '';
  iseditclicked: boolean = false;
  editid = '';


  addUser(data: any) {
    this.contactService.addContact(data).subscribe({
      next: (res) => {
        this.contactList.push(res);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for reaching out. We will get back to you soon.',
          confirmButtonColor: '#c62828'
        });
      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Failed to Send',
          text: 'Something went wrong. Please try again.',
          confirmButtonColor: '#c62828'
        });
      }
    });
    this.clear();
  }


  constructor(private formbuilder: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.formbuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      message: ['']
    })
  }


  clear() {
    this.userForm.reset();
  }


}