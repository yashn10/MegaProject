import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private http: HttpClient) { }

    baseUrl = environment.production ? environment.productionUrl : environment.apiUrl;

    addContact(contactData: any) {
        return this.http.post(`${this.baseUrl}/contacts`, contactData);
    }

}
