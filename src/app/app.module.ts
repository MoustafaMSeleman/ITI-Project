import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { MaterailModule } from './materail/materail.module';
import { StudentsAffairsComponent } from './Components/students-affairs/students-affairs.component';
import { EmployeesAffairsComponent } from './Components/employees-affairs/employees-affairs.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StaffAffairsComponent } from './Components/staff-affairs/staff-affairs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    StudentsAffairsComponent,
    EmployeesAffairsComponent,
    DashboardComponent,
    StaffAffairsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterailModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
