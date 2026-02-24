import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CampService {

    constructor(private http: HttpClient) { }

    baseUrl = environment.production ? environment.productionUrl : environment.apiUrl;

    getAllCamps() {
        return this.http.get(`${this.baseUrl}/camps`);
    }

    getCampById(id: string) {
        return this.http.get(`${this.baseUrl}/camps/${id}`);
    }

    createCamp(campData: any) {
        return this.http.post(`${this.baseUrl}/camps`, campData);
    }

    updateCamp(id: string, campData: any) {
        return this.http.put(`${this.baseUrl}/camps/${id}`, campData);
    }

    deleteCamp(id: string) {
        return this.http.delete(`${this.baseUrl}/camps/${id}`);
    }

}
