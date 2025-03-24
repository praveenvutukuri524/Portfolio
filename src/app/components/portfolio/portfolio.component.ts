import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="portfolio" id="portfolio">
      <h2 class="heading">Latest <span>Projects</span></h2>
      <div class="portfolio-container">
        <div class="portfolio-box" *ngFor="let project of projects">
          <img [src]="project.image" alt="">
          <div class="portfolio-layer">
            <h4>{{project.title}}</h4>
            <p>{{project.description}}</p>
            <a href="#"><i class="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent {
  projects = [
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'Mobile App',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'Digital Marketing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'Content Writing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ];
}