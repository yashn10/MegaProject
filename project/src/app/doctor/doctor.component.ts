import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {


  yesappointment = '';
  yesprescription = '';

  constructor() { }


  ngOnInit(): void {
  }


  appointment() {
    this.yesappointment = 'yes';
  }


  prescription() {
    this.yesprescription = 'yes';
    this.yesappointment = 'no';
  }
  

}
