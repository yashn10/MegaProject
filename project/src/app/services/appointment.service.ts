import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    baseUrl = "https://megaproject-9885.onrender.com/api";

    constructor(private http: HttpClient) { }

    createAppointment(data: any) {
        return this.http.post(`${this.baseUrl}/appointments`, data);
    }

    getMyAppointments() {
        return this.http.get(`${this.baseUrl}/appointments/my`);
    }
}
