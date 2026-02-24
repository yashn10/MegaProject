import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {


  logoutForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.logoutForm = this.formbuilder.group({
      email: [''],
      password: ['']
    })
  }


  logout() {

  }


}