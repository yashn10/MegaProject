import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DashboardService } from '../services/dashboard.service';
import { OrderService } from '../services/order.service';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: any = null;
  stats = {
    donations: 0,
    orders: 0,
    appointments: 0
  };

  activeTab = ''; // 'donations' | 'appointments' | 'orders'
  orders: any[] = [];
  appointments: any[] = [];
  loadingHistory = false;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private orderService: OrderService,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.loadStats();
  }

  loadStats() {
    this.dashboardService.getStats().subscribe({
      next: (res: any) => {
        if (res.data) {
          this.stats = res.data;
        }
      },
      error: (err) => {
        console.log('Error loading stats:', err);
      }
    });
  }

  showHistory(tab: string) {
    if (this.activeTab === tab) {
      this.activeTab = '';
      return;
    }
    this.activeTab = tab;
    this.loadingHistory = true;

    if (tab === 'orders') {
      this.orderService.getMyOrders().subscribe({
        next: (res: any) => {
          this.orders = res.data || [];
          this.loadingHistory = false;
        },
        error: () => { this.loadingHistory = false; }
      });
    } else if (tab === 'appointments') {
      this.appointmentService.getMyAppointments().subscribe({
        next: (res: any) => {
          this.appointments = res.data || [];
          this.loadingHistory = false;
        },
        error: () => { this.loadingHistory = false; }
      });
    } else {
      this.loadingHistory = false;
    }
  }

  closeModal(event: any) {
    if (event.target.classList.contains('history-modal-overlay')) {
      this.activeTab = '';
    }
  }
}
