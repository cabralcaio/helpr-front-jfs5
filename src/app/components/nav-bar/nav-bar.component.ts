import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private static isDark = false;
  public stateToggle = NavBarComponent.isDark

  @HostBinding("class")
  get themeMode() {
    return NavBarComponent.isDark ? "theme-dark" : "theme-light";
  }

  constructor() { }

  ngOnInit(): void {
     this.stateToggle = NavBarComponent.isDark
  }

  public changeTheme(): void {
    NavBarComponent.isDark ? NavBarComponent.isDark = false : NavBarComponent.isDark = true;
  }

  public logout(): void {
    // LOGOUT
  }
}
