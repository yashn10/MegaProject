import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BackendService } from '../appservice/backend.service';
import { HttpClient } from '@angular/common/http';

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
    // throw new Error('Method not implemented.');
  }


  getDonor(city: string) {
    // this.backendService.getdonorDatacity(city).subscribe(
    //   (userdata) => {
    //     console.log("userdata", userdata);
    //     this.donorList = userdata;
    //   },
    //   (error) => {
    //     console.log("error", error);
    //   }
    // )
    // this.backendService.getdonorDatabg(data).subscribe(
    //   (userdata) => {
    //     console.log("userdata", userdata);
    //     this.donorList = userdata;
    //   },
    //   (error) => {
    //     console.log("error", error);
    //   }
    // )
  }


  constructor(private formbuilder: FormBuilder, private backendService: BackendService) {
    this.backendService.getdonorData().subscribe(
      (userdata) => {
        console.log("userdata", userdata);
        this.donorList = userdata;
      },
      (error) => {
        console.log("error", error);
      }
    )

    this.donorForm = this.formbuilder.group({
      bloodgroup: [''],
      city: ['']
    })

  }


  submit() {
    this.isclicked = "yes";
    this.contactdonor = "no";
    this.userlist = [];
  }


  contact(i:any) {
    this.contactdonor = 'yes';
    this.isclicked = 'no';
    this.index = i;
    this.userlist.push(this.donorList[this.index]);
  }


}