import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    baseUrl = "https://megaproject-9885.onrender.com/api";

    constructor(private http: HttpClient) { }

    getStats() {
        return this.http.get(`${this.baseUrl}/dashboard/stats`);
    }
}
