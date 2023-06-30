import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCampComponent } from './donation-camp.component';

describe('DonationCampComponent', () => {
  let component: DonationCampComponent;
  let fixture: ComponentFixture<DonationCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
