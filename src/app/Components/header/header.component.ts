import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  value = 'Clear me';
  show: boolean = false;
  sidebarItems = [
    { name: 'Dashboard', icon: 'dashboard', route: 'dashboard' },
    { name: 'Students Affairs', icon: 'school', route: 'students-affairs' },
    { name: 'Employees Affairs', icon: 'work', route: 'employees-affairs' },
  ];

  showSearchBox() {
    if (this.show === true) {
      this.show = false;
    } else if (this.show === false) {
      this.show = true;
    }
  }
}
