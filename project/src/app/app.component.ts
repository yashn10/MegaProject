import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from './appservice/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  nav = '';

  constructor(private router: Router, private http: HttpClient, private backend: BackendService) { }

  ngOnInit() {
    this.http.get<any>('https://megaproject-9885.onrender.com/login').subscribe(res => {
      const user = res.find((a: any) => {
        return a
      })
      if (!user) {
        this.nav = '';
        this.ngOnInit();
      } else {
        this.nav = 'yes';
        this.ngOnInit();
      }
    }, (error) => {
      alert("error from server side");
      console.log(error, "error");
    }
    )
  }

}