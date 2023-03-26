import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavNgMaterialComponent } from './sidenav-ng-material.component';

describe('SidenavNgMaterialComponent', () => {
  let component: SidenavNgMaterialComponent;
  let fixture: ComponentFixture<SidenavNgMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavNgMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavNgMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
