import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public menuActive: boolean = false;
  public menuItems = [
    { label: 'Home', icon: 'home', url: 'home' },
    { label: 'List', icon: 'list', url: 'list' },
    { label: 'BSearch', icon: 'search', url: 'search' },

  ]

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
