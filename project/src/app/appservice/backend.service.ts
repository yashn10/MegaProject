import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../appdata/app.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor(private http: HttpClient) { }


  contacturl = ('http://localhost:3000/contact');
  donorurl = ('http://localhost:3000/donor');
  registerurl = ('http://localhost:3000/user');
  loginurl = ('http://localhost:3000/login');
  campurl = ('http://localhost:3000/camp');
  orderurl = ('http://localhost:3000/order');
  buymedicines:any = [];


  addconData(data: any) {
    return this.http.post(this.contacturl, data);
  }
  adddonorData(data: any) {
    return this.http.post(this.donorurl, data);
  }
  addregisterData(data: any) {
    return this.http.post(this.registerurl, data);
  }
  addloginData(data: any) {
    return this.http.post(this.loginurl, data);
  }
  addcampData(data: any) {
    return this.http.post(this.campurl, data);
  }
  ordermedicine(data: any) {
    return this.http.post(this.orderurl, data);
  }



  // getconData() {
  //   return this.http.get(this.contacturl);
  // }
  getdonorData() {
    return this.http.get(this.donorurl);
  }
  getloginData() {
    return this.http.get(this.loginurl);
  }
  getcampData() {
    return this.http.get(this.campurl);
  }
  // getLoginData(_id: string) {
  //   return this.http.get(this.loginurl);
  // }
  // getdonorDatabg(bloodgroup:any) {
  //   return this.http.get(this.donorurl+'/'+bloodgroup);
  // }
  // getdonorDatacity(city: string) {
  //   return this.http.get(this.donorurl+'/'+ city);
  // }



  updateconData(_id: string, data: any) {
    return this.http.patch(this.contacturl + '/' + _id, data);
  }
  updatecampData(_id: string, data: any) {
    return this.http.patch(this.campurl + '/' + _id, data);
  }



  deleteconData(_id: string) {
    return this.http.delete(this.contacturl + '/' + _id);
  }
  deleteLogin(_id: string) {
    return this.http.delete(this.loginurl + '/' + _id);
  }
  deleteCamp(_id: string) {
    return this.http.delete(this.campurl + '/' + _id);
  }


}
