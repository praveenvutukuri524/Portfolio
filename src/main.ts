import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { ServicesComponent } from './app/components/services/services.component';
import { PortfolioComponent } from './app/components/portfolio/portfolio.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { ResearchComponent } from './app/components/research/research.component';
import { MembershipComponent } from './app/components/membership/membership.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ResearchComponent,
    MembershipComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <app-home></app-home>
    <app-about></app-about>
    <app-services></app-services>
    <app-research></app-research>
    <app-membership></app-membership>
    <app-portfolio></app-portfolio>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: []
}).catch(err => console.error(err));