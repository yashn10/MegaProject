import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutcampComponent } from './logoutcamp.component';

describe('LogoutcampComponent', () => {
  let component: LogoutcampComponent;
  let fixture: ComponentFixture<LogoutcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutcampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
