import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.production ? environment.productionUrl : environment.apiUrl;

  login(data: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }

  logout() {
    return this.http.post(`${this.baseUrl}/auth/logout`, {});
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
