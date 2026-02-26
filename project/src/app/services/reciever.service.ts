import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ReceiverService {

    constructor(private http: HttpClient) { }

    baseUrl = environment.production ? environment.productionUrl : environment.apiUrl;

    getAllReceivers() {
        return this.http.get(`${this.baseUrl}/donors`);
    }

    getReceiverById(id: string) {
        return this.http.get(`${this.baseUrl}/receivers/${id}`);
    }

    createReceiver(receiverData: any) {
        return this.http.post(`${this.baseUrl}/receivers`, receiverData);
    }

    updateReceiver(id: string, receiverData: any) {
        return this.http.put(`${this.baseUrl}/receivers/${id}`, receiverData);
    }

    deleteReceiver(id: string) {
        return this.http.delete(`${this.baseUrl}/receivers/${id}`);
    }

}
