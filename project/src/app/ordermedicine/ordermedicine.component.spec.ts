import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermedicineComponent } from './ordermedicine.component';

describe('OrdermedicineComponent', () => {
  let component: OrdermedicineComponent;
  let fixture: ComponentFixture<OrdermedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdermedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdermedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
