import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services" id="services">
      <h2 class="heading">Our <span>Services</span></h2>
      <div class="services-container">
        <div class="services-box">
          <i class="fas fa-code"></i>
          <h3>Software Development</h3>
          <p>Expert in developing scalable web applications using Angular, .NET, and cloud technologies. Specializing in healthcare systems and data processing solutions.</p>
          <a href="#" class="btn">Learn More</a>
        </div>

        <div class="services-box">
          <i class="fas fa-cloud"></i>
          <h3>Cloud Solutions</h3>
          <p>Comprehensive cloud architecture and implementation using Microsoft Azure. Focus on security, scalability, and optimal performance for enterprise applications.</p>
          <a href="#" class="btn">Learn More</a>
        </div>

        <div class="services-box">
          <i class="fas fa-robot"></i>
          <h3>Automation Systems</h3>
          <p>Design and implementation of automated workflow systems. Expertise in healthcare claim processing and laboratory automation solutions.</p>
          <a href="#" class="btn">Learn More</a>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {}