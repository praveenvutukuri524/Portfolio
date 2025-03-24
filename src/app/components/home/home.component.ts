import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home" id="home">
      <div class="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Praveen Kumar Vutukuri</h1>
        <h3>And I'm a <span>Senior Application Engineer Specialist</span></h3>
        <p>
          I am a highly skilled professional with a strong foundation in software development, cloud computing, and IT solutions tailored for advanced industries. My expertise lies in leveraging cutting-edge technologies to design, implement, and optimize scalable and secure solutions.
        </p>
        <p>
          With a keen interest in emerging fields, I specialize in the integration of automation and data analytics, particularly in healthcare claim processing and stem cell research. I bring deep experience in creating tools for automated workflows, statistical analysis, and scalable web applications using Microsoft Azure, .NET, and Angular. My work has contributed to improved efficiency and innovation in complex systems, including claim adjudication and automated cell culture systems.
        </p>
        <p>
          I am also passionate about research and have contributed to various IEEE papers exploring the integration of cloud computing and data processing for real-world applications, such as healthcare, retail, and product information management. My approach emphasizes scalability, elasticity, and the seamless integration of data from diverse sources to drive actionable insights.
        </p>
        <p>
          Beyond my technical expertise, I enjoy mentoring teams, and patent development. My dedication to continuous learning and innovation keeps me at the forefront of the IT and cloud technology landscape.
        </p>
        <div class="social-media">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <a href="#" class="btn">Download CV</a>
      </div>
      <div class="home-img">
        <img src="assets/images/praveen.jpg" alt="Praveen Kumar Vutukuri">
      </div>
    </section>
  `
})
export class HomeComponent {}