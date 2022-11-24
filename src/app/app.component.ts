import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  trainName = 'Nagpur-Mumbai Duronto Express';
  availTickets = 100;

  bookticket(){
    this.availTickets--;
  }

  cancelticket(){
    this.availTickets++;
  }
}