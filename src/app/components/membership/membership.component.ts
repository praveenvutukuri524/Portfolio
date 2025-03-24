import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="membership" id="membership">
      <h2 class="heading">Professional <span>Memberships</span></h2>
      <div class="membership-container">
        <div class="membership-box">
          <i class="fas fa-award"></i>
          <h3>IEEE Member</h3>
          <p>Active member of IEEE Computer Society, contributing to research and development in computer science and engineering.</p>
        </div>

        <div class="membership-box">
          <i class="fas fa-users"></i>
          <h3>ACM Member</h3>
          <p>Member of Association for Computing Machinery, participating in professional development and knowledge sharing.</p>
        </div>

        <div class="membership-box">
          <i class="fas fa-certificate"></i>
          <h3>AAAI Member</h3>
          <p>Member of Association for the Advancement of Artificial Intelligence, focusing on AI research and applications.</p>
        </div>
      </div>

      <h2 class="heading mt-5">Editorial <span>Positions</span></h2>
      <div class="editorial-container">
        <div class="editorial-section board-member">
          <div class="editorial-header">
            <i class="fas fa-pen-fancy"></i>
            <h3>Editorial Board Member</h3>
          </div>
          <div class="journal-grid">
            <div class="journal-card">
              <i class="fas fa-journal-whills"></i>
              <h4>International Journal of Scientific Research in Engineering and Management</h4>
              <span class="journal-role">Board Member</span>
            </div>
            <div class="journal-card">
              <i class="fas fa-journal-whills"></i>
              <h4>International Journal of Innovative Research in Computer and Technology</h4>
              <span class="journal-role">Board Member</span>
            </div>
            <div class="journal-card">
              <i class="fas fa-journal-whills"></i>
              <h4>International Journal of Scientific Research in Engineering and Management</h4>
              <span class="journal-role">Board Member</span>
            </div>
            <div class="journal-card">
              <i class="fas fa-journal-whills"></i>
              <h4>International Journal of Research and Scientific Innovation</h4>
              <span class="journal-role">Board Member</span>
            </div>
            <div class="journal-card">
              <i class="fas fa-journal-whills"></i>
              <h4>International Journal of Research in Management & Business Studies</h4>
              <span class="journal-role">Board Member</span>
            </div>
          </div>
        </div>

        <div class="editorial-section reviewer">
          <div class="editorial-header">
            <i class="fas fa-book-reader"></i>
            <h3>Journal Reviewer</h3>
          </div>
          <div class="journal-grid">
            <div class="journal-card">
              <i class="fas fa-search"></i>
              <h4>Journal of Insurance and Financial Management</h4>
              <span class="journal-role">Reviewer</span>
            </div>
            <div class="journal-card">
              <i class="fas fa-search"></i>
              <h4>International Journal of Engineering and Advanced Technology</h4>
              <span class="journal-role">Reviewer</span>
            </div>
            <div class="journal-card">
              <i class="fas fa-search"></i>
              <h4>International Journal of Scientific & Engineering Research</h4>
              <span class="journal-role">Reviewer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MembershipComponent {}