import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DOCUMENT } from '@angular/common';

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
    const hostClass = NavBarComponent.isDark ? "theme-dark" : "theme-light";
    this.renderer.setAttribute(this.document.body, 'class', hostClass);
    return NavBarComponent.isDark ? "theme-dark" : "theme-light";
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document, private renderer: Renderer2
  ) { }

  ngOnInit(): void {
     this.stateToggle = NavBarComponent.isDark
     this.renderer.setAttribute(this.document.body, 'class', 'theme-light');
  }


  public changeTheme(): void {
    NavBarComponent.isDark ? NavBarComponent.isDark = false : NavBarComponent.isDark = true;
  }

  public logout(): void {
    this.authService.logout().subscribe(response => {
      alert("Até logo!");
      this.router.navigate(["/login"]);
    });
  }
}
