import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://megaproject-9885.onrender.com/api";

  getAllDonors() {
    return this.http.get(`${this.baseUrl}/donors`);
  }

  getDonorById(id: string) {
    return this.http.get(`${this.baseUrl}/donors/${id}`);
  }

  createDonor(donorData: any) {
    return this.http.post(`${this.baseUrl}/donors`, donorData);
  }

  updateDonor(id: string, donorData: any) {
    return this.http.put(`${this.baseUrl}/donors/${id}`, donorData);
  }

  deleteDonor(id: string) {
    return this.http.delete(`${this.baseUrl}/donors/${id}`);
  }

}
