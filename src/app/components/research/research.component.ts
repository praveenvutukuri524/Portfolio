import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="research" id="research">
      <h2 class="heading">My <span>Research</span></h2>
      <div class="research-container">
        <div class="research-box">
          <h3>Healthcare Claims Processing</h3>
          <p>Extensive research in healthcare claims processing automation and optimization, focusing on queue management, DOS validation, and claim adjudication processes.</p>
          <div class="publication-list">
            <div class="publication-item">
              <h4>Automatic Queue Management for Claims</h4>
              <p>Published in EJAET Journal, June 2019</p>
              <a href="https://ejaet.com/PDF/6-6/EJAET-6-6-66-69.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Claim Acceptance using DOS</h4>
              <p>Published in EJAET Journal, July 2019</p>
              <a href="https://ejaet.com/PDF/6-7/EJAET-6-7-80-85.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Out Of Area Logic in Claim Adjudication</h4>
              <p>Published in IJIRCT, September 2020</p>
              <a href="https://www.ijirct.org/viewPaper.php?paperId=2412071" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Pick Member process in Healthcare Claim Adjudication</h4>
              <p>Published in IJSR, March 2021</p>
              <a href="https://www.ijsr.net/get/SR24829151116" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Claim Pricing in Claim Adjudication</h4>
              <p>Published in IJSREM, June 2021</p>
              <a href="https://ijsrem.com/download/claim-pricing-in-claim-adjudication-process/" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
          </div>
        </div>

        <div class="research-box">
          <h3>Process Automation & Integration</h3>
          <p>Research on automation and system integration in healthcare and business processes.</p>
          <div class="publication-list">
            <div class="publication-item">
              <h4>Pick Provider process in Healthcare Claim Adjudication</h4>
              <p>Published in URF Journals, March 2022</p>
              <a href="https://urfjournals.org/open-access/provider-pick-process-in-claim-adjudication-process.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Pick Vendor process in Healthcare Claim Adjudication</h4>
              <p>Published in Online Scientific Research, March 2022</p>
              <a href="https://www.onlinescientificresearch.com/articles/vendor-pick-process-in-claim-adjudication-process.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Claim Extraction process Automation</h4>
              <p>Published in IJSR, June 2024</p>
              <a href="https://www.ijsr.net/archive/v13i6/SR24620121510.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Using DOS in Transaction 837 Process Validation</h4>
              <p>Published in IJSR, August 2024</p>
              <a href="https://www.ijsr.net/archive/v13i8/SR24729045601.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
          </div>
        </div>

        <div class="research-box">
          <h3>System Architecture & Integration</h3>
          <p>Research on system architecture, integration patterns, and optimization techniques.</p>
          <div class="publication-list">
            <div class="publication-item">
              <h4>Cloud Integration of Product Information</h4>
              <p>Published in ISAER Journal, October 2018</p>
              <a href="https://isaer.com/download/vol-5-iss-10-2018/ISAER2018-05-10-350-354.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Shipping Estimation</h4>
              <p>Published in ISAER Journal, November 2019</p>
              <a href="https://isaer.com/download/vol-6-iss-11-2019/ISAER2019-6-11-325-332.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Quartz Library Integration for Claim Sweeping</h4>
              <p>Published in IJCEM, October 2022</p>
              <a href="https://ijcem.in/wp-content/uploads/2024/09/QUARTZ-LIBRARY-INTEGRATION-FOR-CLAIM-SWEEPING-BATCH-SERVICES.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Optimized Connection Control Library</h4>
              <p>Published in Online Scientific Research, June 2023</p>
              <a href="https://www.onlinescientificresearch.com/articles/optimized-connection-control-library-in-multitier-systems.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Integrating E2E Event Tracking</h4>
              <p>Published in JTI Publishing, October 2024</p>
              <a href="https://jtipublishing.com/jti/article/view/118/342" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
          </div>
        </div>

        <div class="research-box">
          <h3>Advanced Healthcare & Business Solutions</h3>
          <p>Research on innovative solutions in healthcare data processing and business transformation.</p>
          <div class="publication-list">
            <div class="publication-item">
              <h4>Extracting Diagnosis Codes from Transaction 837</h4>
              <p>Published in IJCEM, October 2020</p>
              <a href="https://ijcem.in/wp-content/uploads/2024/09/EXTRACTING-DIAGNOSIS-CODES-FROM-TRANSACTION-837.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Insurance Cost Analysis</h4>
              <p>Published in URF Journals, March 2023</p>
              <a href="https://urfjournals.org/open-access/understanding-the-factors-behind-rising-insurance-costs-in-the-usa-2021-2023-a-white-paper.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Financial Risks in Healthcare Claims</h4>
              <p>Published in ISJEM, November 2023</p>
              <a href="https://isjem.com/volume02issue11november2023/" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>Service Reason Evaluation in Claims</h4>
              <p>Published in IJIRMPS, June 2024</p>
              <a href="https://www.ijirmps.org/papers/2024/3/231480.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
            <div class="publication-item">
              <h4>The Future of Digital Commerce</h4>
              <p>Published in ISAER Journal, August 2024</p>
              <a href="https://isaer.com/download/vol-11-iss-7-2024/ISAER2024-11-7-215-220.pdf" target="_blank" class="publication-link">
                <i class="fas fa-external-link-alt"></i> View Publication
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ResearchComponent {}