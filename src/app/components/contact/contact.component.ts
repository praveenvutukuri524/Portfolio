import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact" id="contact">
      <h2 class="heading">Contact <span>Me!</span></h2>
      
      <div class="contact-container">
        <div class="contact-info">
          <div class="info-box">
            <i class="fas fa-user"></i>
            <div class="info-text">
              <h3>Name</h3>
              <p>Praveen Kumar Vutukuri</p>
            </div>
          </div>
          
          <div class="info-box">
            <i class="fas fa-phone"></i>
            <div class="info-text">
              <h3>Phone</h3>
              <p>+1 (336) 612-4176</p>
            </div>
          </div>
          
          <div class="info-box">
            <i class="fas fa-envelope"></i>
            <div class="info-text">
              <h3>Email</h3>
              <p>pvutukuri524&#64;gmail.com</p>
            </div>
          </div>

          <div class="social-links">
            <a href="#" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <form>
          <div class="input-box">
            <input type="text" placeholder="Full Name">
            <input type="email" placeholder="Email Address">
          </div>
          <div class="input-box">
            <input type="number" placeholder="Mobile Number">
            <input type="text" placeholder="Email Subject">
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" class="btn">
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {}