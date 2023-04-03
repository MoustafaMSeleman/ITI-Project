import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAffairsComponent } from './employees-affairs.component';

describe('EmployeesAffairsComponent', () => {
  let component: EmployeesAffairsComponent;
  let fixture: ComponentFixture<EmployeesAffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesAffairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
