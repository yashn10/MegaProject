import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ReceiverService } from '../services/reciever.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {


  @ViewChild('userForm')
  userForm!: NgForm;
  donorForm: FormGroup;
  donorList: any = [];
  isclicked = '';
  contactdonor = '';
  searchtext: any;
  // dataList:any = [];
  index = '';
  userlist: any = [];


  ngOnInit() {
    this.fetchAllReceivers();
  }


  getDonor(city: string) {
  }


  constructor(private formbuilder: FormBuilder, private receiverService: ReceiverService) {
    this.donorForm = this.formbuilder.group({
      bloodgroup: [''],
      city: ['']
    })
  }


  fetchAllReceivers() {
    this.receiverService.getAllReceivers().subscribe({
      next: (res: any) => {
        this.donorList = res.data;
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        console.log(err);
      }
    });
  }


  submit() {
    this.isclicked = "yes";
    this.contactdonor = "no";
    this.userlist = [];
  }


  contact(i: any) {
    this.contactdonor = 'yes';
    this.isclicked = 'no';
    this.index = i;
    this.userlist.push(this.donorList[this.index]);
  }


}