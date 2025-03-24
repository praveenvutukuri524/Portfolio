import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <a href="#" class="logo">Portfolio</a>
      <nav class="navbar">
        <a href="#home" [class.active]="activeSection === 'home'" (click)="setActive('home')">Home</a>
        <a href="#about" [class.active]="activeSection === 'about'" (click)="setActive('about')">About</a>
        <a href="#services" [class.active]="activeSection === 'services'" (click)="setActive('services')">Services</a>
        <a href="#research" [class.active]="activeSection === 'research'" (click)="setActive('research')">Research</a>
        <a href="#membership" [class.active]="activeSection === 'membership'" (click)="setActive('membership')">Membership</a>
        <a href="#portfolio" [class.active]="activeSection === 'portfolio'" (click)="setActive('portfolio')">Portfolio</a>
        <a href="#contact" [class.active]="activeSection === 'contact'" (click)="setActive('contact')">Contact</a>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  activeSection = 'home';

  setActive(section: string) {
    this.activeSection = section;
  }
}