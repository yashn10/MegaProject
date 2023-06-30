import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BackendService } from '../appservice/backend.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ordermedicine',
  templateUrl: './ordermedicine.component.html',
  styleUrls: ['./ordermedicine.component.scss']
})
export class OrdermedicineComponent implements OnInit {


  @ViewChild('userForm')
  userForm!: NgForm;
  orderForm: FormGroup;
  isbuy = '';
  searchtext: any;
  cart: any = [];
  totalprice = 0;


  cartlist: any = [
    {
      img: "../assets/img/WhatsApp Image 2023-03-24 at 3.36.09 PM (1).jpeg",
      Name: "Supradyn Daily Multivitamin Tablet With Essential Zinc.",
      qty: "15 Tablet(s) in Strip.",
      price: 49.41
    },

    {
      img: "../assets/img/WhatsApp Image 2023-03-24 at 3.36.13 PM (1).jpeg",
      Name: "VPrime Bone Plus Capsule (500 mg)",
      qty: "30 Tablet(s) in Bottle.",
      price: 897
    },

    {
      img: "../assets/img/WhatsApp Image 2023-03-24 at 3.36.10 PM.jpeg",
      Name: "Dolo (Paracetamol) 650mg Strip Of 15 Tablets",
      qty: "15 Tablet(s) in Strip.",
      price: 25.41
    },

    {
      img: "../assets/img/WhatsApp Image 2023-03-24 at 3.36.13 PM.jpeg",
      Name: "Alograce Vitamin E,Honey,Aloe Vera Cream.",
      qty: "50gm in a Tube",
      price: 133.76
    },

    {
      img: "../assets/img/WhatsApp Image 2023-03-24 at 3.40.15 PM.jpeg",
      Name: "Evion 400mg Strip Of 10 Capsules",
      qty: "15 Tablet(s) in Strip.",
      price: 34.1
    },

    {
      img: "../assets/img/digine.jpeg",
      Name: "Digene Acidity &amp; Gas Relief Tablets 15s- Mint Flavour",
      qty: "Strip of (15) tablets.",
      price: 22.93
    },

    {
      img: "../assets/img/WhatsApp Image 2023-03-24 at 3.36.12 PM.jpeg",
      Name: "Orasore INSTANT PAIN RELIEF Mouth Ulcer Gel",
      qty: "25gm in a Tube",
      price: 149.93
    },

    {
      img: "../assets/img/WhatsApp Image 2023-03-24 at 3.36.12 PM (1).jpeg",
      Name: "Saridon Headache Relief Tablet- Strip Of 10 Tablets.",
      qty: "10 Tablet(s) in Strip.",
      price: 38.92
    },

    {
      img: "../assets/img/WhatsApp Image 2023-03-24 at 3.36.11 PM (2).jpeg",
      Name: "HIMALAYA LIV-52-DS-TABLETS-60",
      qty: "60 Tablets in Bottle",
      price: 128.30
    }
  ];


  constructor(private formbuilder: FormBuilder, private backend: BackendService, private http: HttpClient) {
    this.orderForm = this.formbuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      address: [''],
      pin: [''],
      city: [''],
      state: ['']
    })
  }


  order(data: any) {

    this.backend.ordermedicine(data).subscribe(
      (order) => {
        console.log(order, "order")
        this.clear();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your order has been successfully placed',
          showConfirmButton: false,
          timer: 2500
        })
      }
    ), (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: 'error from server side occurs'
      })
    }

  }


  ngOnInit(): void {
  }


  buy() {
    this.isbuy = 'yes';
  }


  addtocart(i: any) {
    this.cart.push(this.cartlist[i]);
    this.totalprice = 0;
    this.cart.forEach((element: any) => {
      this.totalprice = this.totalprice + element.price;
    })
  }


  clearcart() {
    this.cart = [];
    this.totalprice = 0;
  }


  clear() {
    this.userForm.reset();
  }


}
