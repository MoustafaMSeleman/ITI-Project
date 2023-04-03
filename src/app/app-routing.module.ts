import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { StudentsAffairsComponent } from './Components/students-affairs/students-affairs.component';
import { EmployeesAffairsComponent } from './Components/employees-affairs/employees-affairs.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StaffAffairsComponent } from './Components/staff-affairs/staff-affairs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'staff-affairs', component: StaffAffairsComponent },
  { path: 'students-affairs', component: StudentsAffairsComponent },
  { path: 'employees-affairs', component: EmployeesAffairsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
