import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BackendService } from '../appservice/backend.service';
import { HttpClient } from '@angular/common/http';

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
    this.backendService.addconData(data).subscribe(
      (userdata) => {
        console.log(userdata);
      }
    )
    this.clear();
  }


  constructor(private formbuilder: FormBuilder, private backendService: BackendService) {

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