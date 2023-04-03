import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAffairsComponent } from './staff-affairs.component';

describe('StaffAffairsComponent', () => {
  let component: StaffAffairsComponent;
  let fixture: ComponentFixture<StaffAffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAffairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
