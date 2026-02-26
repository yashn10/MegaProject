import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    baseUrl = "https://megaproject-9885.onrender.com/api";

    constructor(private http: HttpClient) { }

    createOrder(data: any) {
        return this.http.post(`${this.baseUrl}/orders`, data);
    }

    getMyOrders() {
        return this.http.get(`${this.baseUrl}/orders/my`);
    }
}
