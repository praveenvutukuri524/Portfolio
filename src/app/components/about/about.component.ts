import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about" id="about">
      <h2 class="heading">About <span>Me</span></h2>
      
      <div class="about-container">
        <div class="about-image-section">
          <div class="about-img">
            <img src="assets/images/praveen.jpg" alt="Praveen Kumar Vutukuri">
          </div>
          <div class="experience-cards">
            <div class="exp-card">
              <i class="fas fa-code"></i>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div class="exp-card">
              <i class="fas fa-file-alt"></i>
              <h3>20+</h3>
              <p>Publications</p>
            </div>
            <div class="exp-card">
              <i class="fas fa-project-diagram"></i>
              <h3>20+</h3>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div class="about-content">
          <div class="about-header">
            <h3>Senior Application Engineer Specialist</h3>
            <div class="tech-stack">
              <span><i class="fab fa-angular"></i> Angular</span>
              <span><i class="fab fa-microsoft"></i> .NET</span>
              <span><i class="fab fa-aws"></i> Cloud</span>
              <span><i class="fas fa-database"></i> SQL</span>
            </div>
          </div>

          <div class="about-sections">
            <div class="about-section">
              <h4><i class="fas fa-user-tie"></i> Professional Summary</h4>
              <p>
                I am a highly skilled professional with extensive experience in software development, cloud computing, and IT solutions 
                for advanced industries. My expertise focuses on creating scalable and secure solutions using cutting-edge technologies.
              </p>
            </div>

            <div class="about-section">
              <h4><i class="fas fa-laptop-code"></i> Core Expertise</h4>
              <div class="expertise-grid">
                <div class="expertise-item">
                  <i class="fas fa-heartbeat"></i>
                  <span>Healthcare Claims Processing</span>
                </div>
                <div class="expertise-item">
                  <i class="fas fa-cloud"></i>
                  <span>Azure Development</span>
                </div>
                <div class="expertise-item">
                  <i class="fas fa-mobile-alt"></i>
                  <span>Web Applications</span>
                </div>
              </div>
            </div>

            <div class="about-section">
              <h4><i class="fas fa-flask"></i> Research Contributions</h4>
              <p>
                Published multiple IEEE papers on cloud computing, specialized in healthcare data processing, 
                and expert in retail and product information systems with a focus on scalability and data integration.
              </p>
              <a href="#research" class="btn">View Research</a>
            </div>

            <div class="about-section">
              <h4><i class="fas fa-star"></i> Additional Strengths</h4>
              <div class="strengths-grid">
                <div class="strength-item">
                  <i class="fas fa-users"></i>
                  <span>Team Leadership</span>
                </div>
                <div class="strength-item">
                  <i class="fas fa-lightbulb"></i>
                  <span>Innovation</span>
                </div>
                <div class="strength-item">
                  <i class="fas fa-book"></i>
                  <span>Continuous Learning</span>
                </div>
                <div class="strength-item">
                  <i class="fas fa-cogs"></i>
                  <span>System Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}