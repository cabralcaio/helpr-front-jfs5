import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private isDark = false;

  @HostBinding("class")
  get themeMode() {
    return this.isDark ? "theme-dark" : "theme-light";
  }

  constructor() { }

  ngOnInit(): void {
  }

  public changeTheme(): void {
    this.isDark ? this.isDark = false : this.isDark = true;
  }

  public logout(): void {
    // LOGOUT
  }
}
