import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-text">
        <p>Copyright &copy; 2024 | All Rights Reserved.</p>
      </div>
      <div class="footer-iconTop">
        <a href="#home"><i class="fas fa-arrow-up"></i></a>
      </div>
    </footer>
  `
})
export class FooterComponent {}