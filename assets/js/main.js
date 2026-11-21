/**
 * EDC BBIT - Main Application Logic
 * Interactive features: Core Team self-registration, filtering, student join pass, dynamic modals
 * Developer & Organizer: Shruti Biswas
 */

// Retrieve Seed Data safely across local file:// and web server contexts
const INITIAL_EDC_DATA = (typeof window !== 'undefined' && window.INITIAL_EDC_DATA) ? window.INITIAL_EDC_DATA : {
  cellInfo: {},
  stats: [],
  initiatives: [],
  events: [],
  coreMembers: [],
  faqs: []
};

// LocalStorage Keys
const STORAGE_KEYS = {
  TEAM: 'edc_bbit_team_members_v2',
  APPLICATIONS: 'edc_bbit_student_apps_v1'
};

// Application State
const state = {
  teamMembers: [],
  activeFilter: 'all',
  searchQuery: '',
  studentApplications: []
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initNavigation();
  renderStats();
  renderInitiatives();
  renderEvents();
  renderTeam();
  initTeamFilters();
  initCoreMemberModal();
  initStudentJoinForm();
  initFaqAccordion();
});

/**
 * Storage Initialization
 */
function initStorage() {
  const storedTeam = localStorage.getItem(STORAGE_KEYS.TEAM);
  let parsed = null;
  if (storedTeam) {
    try {
      parsed = JSON.parse(storedTeam);
    } catch (e) {
      console.error('Error parsing stored team:', e);
      parsed = null;
    }
  }

  // Validate that the cached team contains the official 18-member roster
  if (parsed && Array.isArray(parsed) && parsed.length >= 18 && parsed.some(m => m.name === 'Rajib Karmakar')) {
    state.teamMembers = parsed;
  } else {
    state.teamMembers = [...INITIAL_EDC_DATA.coreMembers];
    try {
      localStorage.setItem(STORAGE_KEYS.TEAM, JSON.stringify(state.teamMembers));
    } catch (e) {}
  }

  const storedApps = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
  if (storedApps) {
    try {
      state.studentApplications = JSON.parse(storedApps);
    } catch (e) {
      state.studentApplications = [];
    }
  }
}

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
  const hamburgerBtn = document.getElementById('hamburger-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      hamburgerBtn.innerHTML = isOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      });
    });
  }

  // Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.desktop-nav a[href*="${sectionId}"]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navLink) navLink.classList.add('active');
      } else {
        if (navLink) navLink.classList.remove('active');
      }
    });
  });
}

/**
 * Render Key Statistics
 */
function renderStats() {
  const container = document.getElementById('stats-strip');
  if (!container) return;

  container.innerHTML = INITIAL_EDC_DATA.stats.map(stat => `
    <div class="stat-card">
      <div class="stat-number">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

/**
 * Render Core Initiatives / Pillars
 */
function renderInitiatives() {
  const grid = document.getElementById('initiatives-grid');
  if (!grid) return;

  grid.innerHTML = INITIAL_EDC_DATA.initiatives.map(item => `
    <article class="initiative-card">
      <div class="initiative-icon-wrap">
        ${getIconSvg(item.icon)}
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <div class="initiative-tags">
        ${item.tags.map(tag => `<span class="init-tag">${escapeHtml(tag)}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

/**
 * Render Flagship Events
 */
function renderEvents() {
  const grid = document.getElementById('events-grid');
  if (!grid) return;

  grid.innerHTML = INITIAL_EDC_DATA.events.map((evt, idx) => `
    <div class="event-card ${idx === 0 ? 'featured-event' : ''}">
      <span class="event-badge">${escapeHtml(evt.badge)}</span>
      <div class="event-date-venue">
        <span>📅 ${escapeHtml(evt.date)}</span>
        <span>📍 ${escapeHtml(evt.venue)}</span>
      </div>
      <h3 class="event-title">${escapeHtml(evt.title)}</h3>
      <p class="event-description">${escapeHtml(evt.description)}</p>
      <div class="event-meta-pill">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <span>${escapeHtml(evt.stats)}</span>
      </div>
    </div>
  `).join('');
}

/**
 * Team Filtering and Search
 */
function initTeamFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('team-search-input');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeFilter = btn.dataset.filter;
      renderTeam();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderTeam();
    });
  }

  // Export Team Button
  const exportBtn = document.getElementById('export-team-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportTeamData);
  }

  // Reset Team Button
  const resetBtn = document.getElementById('reset-team-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetTeamData);
  }
}

/**
 * Render Core Team Directory
 */
function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;

  const filtered = state.teamMembers.filter(member => {
    // Filter matching
    const filter = (state.activeFilter || 'all').toLowerCase();
    let matchesFilter = false;

    if (filter === 'all') {
      matchesFilter = true;
    } else if (filter === 'core') {
      matchesFilter = (member.designation && member.designation.toLowerCase().includes('core')) || 
                      (member.role && member.role.toLowerCase().includes('core')) ||
                      (member.category && member.category.toLowerCase().includes('core'));
    } else if (filter === 'volunteer') {
      matchesFilter = (member.designation && member.designation.toLowerCase().includes('volunteer')) || 
                      (member.role && member.role.toLowerCase().includes('volunteer')) ||
                      (member.category && member.category.toLowerCase().includes('volunteer'));
    } else if (filter === '4th') {
      matchesFilter = member.year && member.year.toLowerCase().includes('4th');
    } else if (filter === '3rd') {
      matchesFilter = member.year && member.year.toLowerCase().includes('3rd');
    } else if (filter === '2nd') {
      matchesFilter = member.year && member.year.toLowerCase().includes('2nd');
    } else {
      matchesFilter = (member.category && member.category.toLowerCase().includes(filter)) ||
                      (member.role && member.role.toLowerCase().includes(filter));
    }

    // Search query matching
    const query = state.searchQuery;
    const matchesSearch = !query ||
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      (member.designation && member.designation.toLowerCase().includes(query)) ||
      (member.contact && member.contact.toLowerCase().includes(query)) ||
      (member.year && member.year.toLowerCase().includes(query)) ||
      (member.department && member.department.toLowerCase().includes(query)) ||
      (member.skills && member.skills.some(s => s.toLowerCase().includes(query)));

    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="glass-panel" style="grid-column: 1 / -1; padding: 3rem; text-align: center;">
        <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 1rem;">No team members found matching your search.</p>
        <button class="btn btn-secondary btn-sm" onclick="document.getElementById('team-search-input').value=''; window.dispatchEvent(new Event('input'));">Clear Search</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(member => {
    const isDevHighlight = member.id === 'shruti-biswas' || (member.role && member.role.toLowerCase().includes('developer'));
    const isCore = (member.designation && member.designation.toLowerCase().includes('core')) || (member.role && member.role.toLowerCase().includes('core'));
    return `
      <div class="team-card ${isDevHighlight ? 'featured-developer' : ''}">
        ${isDevHighlight ? `
          <div class="featured-ribbon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            Lead Developer &amp; Organizer
          </div>
        ` : (isCore ? `
          <div class="member-role-badge">Core Member</div>
        ` : `
          <div class="member-role-badge volunteer-badge">Volunteer</div>
        `)}

        <div class="member-header">
          <div class="member-avatar" style="${member.photo ? '' : `background: ${member.avatarBg || 'linear-gradient(135deg, #18181b, #000000)'}`}">
            ${member.photo 
              ? `<img src="${member.photo}" alt="${escapeHtml(member.name)}" onerror="this.onerror=null; this.parentElement.innerText='${member.initials || 'ED'}';">` 
              : (member.initials || getInitials(member.name))}
          </div>
          <div class="member-title-info">
            <h4 class="member-name">${escapeHtml(member.name)}</h4>
            <span class="member-role">${escapeHtml(member.role)}</span>
            <span class="member-dept">${escapeHtml(member.department || 'BBIT')} ${member.year ? `• <strong>${escapeHtml(member.year)}</strong>` : ''}</span>
          </div>
        </div>

        <p class="member-bio">${escapeHtml(member.bio || 'Active team member facilitating student innovation, hackathons, and operations at EDC BBIT.')}</p>

        <div class="member-skills-list">
          ${(member.skills || []).map(skill => `<span class="skill-tag">${escapeHtml(skill)}</span>`).join('')}
        </div>

        <div class="member-card-footer">
          <div class="member-contact-wrap">
            ${member.contact ? `
              <a href="tel:+91${escapeHtml(member.contact)}" class="member-contact-pill" title="Call ${escapeHtml(member.name)}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 ${escapeHtml(member.contact)}
              </a>
            ` : `<span style="font-size: 0.78rem; color: var(--text-dim); text-transform: uppercase; font-weight: 600;">${escapeHtml(member.designation || 'Member')}</span>`}
          </div>
          <div class="member-socials">
            ${member.linkedin ? `
              <a href="${escapeHtml(member.linkedin)}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="LinkedIn Profile" aria-label="LinkedIn Profile">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.57a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/></svg>
              </a>
            ` : ''}
            ${member.github ? `
              <a href="${escapeHtml(member.github)}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="GitHub" aria-label="GitHub Profile">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Core Member Modal Logic
 */
function initCoreMemberModal() {
  const modal = document.getElementById('core-member-modal');
  const openBtn = document.getElementById('open-member-modal-btn');
  const closeBtn = document.getElementById('close-member-modal-btn');
  const cancelBtn = document.getElementById('cancel-member-modal-btn');
  const form = document.getElementById('core-member-form');
  const photoInput = document.getElementById('member-photo-input');
  let uploadedPhotoBase64 = '';

  if (!modal) return;

  const openButtons = [
    document.getElementById('open-member-modal-btn'),
    document.getElementById('open-member-modal-btn-2'),
    document.getElementById('open-member-modal-btn-footer'),
    document.getElementById('open-member-modal-btn-drawer')
  ].filter(Boolean);

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const mobileDrawer = document.getElementById('mobile-drawer');
      if (mobileDrawer) mobileDrawer.classList.remove('open');
      form.reset();
      uploadedPhotoBase64 = '';
      const preview = document.getElementById('member-photo-preview');
      if (preview) preview.innerHTML = '';
      modal.showModal();
    });
  });

  const closeModal = () => modal.close();
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      modal.close();
    }
  });

  // Handle Photo File Upload Preview
  if (photoInput) {
    photoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          showToast('Image size exceeds 2MB limit. Please choose a smaller image.', 'info');
          photoInput.value = '';
          return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
          uploadedPhotoBase64 = event.target.result;
          const preview = document.getElementById('member-photo-preview');
          if (preview) {
            preview.innerHTML = `<img src="${uploadedPhotoBase64}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid #ffffff;">`;
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Handle Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('member-name').value.trim();
      const role = document.getElementById('member-role').value.trim();
      const category = document.getElementById('member-category').value;
      const department = document.getElementById('member-department').value.trim();
      const year = document.getElementById('member-year').value;
      const bio = document.getElementById('member-bio').value.trim();
      const skillsRaw = document.getElementById('member-skills').value.trim();
      const linkedin = document.getElementById('member-linkedin').value.trim();
      const github = document.getElementById('member-github').value.trim();
      const photoUrl = document.getElementById('member-photo-url').value.trim();

      if (!name || !role) {
        showToast('Please fill in your Name and Designation.', 'info');
        return;
      }

      const skills = skillsRaw ? skillsRaw.split(',').map(s => s.trim()).filter(Boolean) : ['Innovation', 'Leadership'];
      const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4);

      const newMember = {
        id,
        name,
        role,
        category: category || 'Core Team',
        department: department || 'Engineering',
        year: year || 'Core Committee',
        bio: bio || 'Core member facilitating entrepreneurship, innovation, and hackathons at BBIT.',
        skills,
        linkedin: linkedin || 'https://www.linkedin.com/company/ed-cell-bbit/',
        github: github || '',
        photo: uploadedPhotoBase64 || photoUrl || '',
        initials: getInitials(name),
        avatarBg: getRandomGradient()
      };

      // Add to state and localStorage
      state.teamMembers.push(newMember);
      localStorage.setItem(STORAGE_KEYS.TEAM, JSON.stringify(state.teamMembers));

      renderTeam();
      modal.close();
      form.reset();

      showToast(`Welcome, ${name}! Your core member profile is live.`, 'success');
    });
  }
}

/**
 * Student Join EDC Form Handling
 */
function initStudentJoinForm() {
  const form = document.getElementById('student-join-form');
  const resultCard = document.getElementById('membership-pass-result');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('student-name').value.trim();
    const email = document.getElementById('student-email').value.trim();
    const phone = document.getElementById('student-phone').value.trim();
    const rollNo = document.getElementById('student-roll').value.trim();
    const department = document.getElementById('student-dept').value;
    const year = document.getElementById('student-year').value;
    const whyJoin = document.getElementById('student-why').value.trim();
    const idea = document.getElementById('student-idea').value.trim();

    // Check selected interests
    const interestCheckboxes = form.querySelectorAll('input[name="interests"]:checked');
    const interests = Array.from(interestCheckboxes).map(cb => cb.value);

    const applicationId = `EDC-BBIT-${year ? year.substring(0, 1) : '2'}${Math.floor(1000 + Math.random() * 9000)}`;
    const submissionDate = new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const applicationData = {
      applicationId,
      name,
      email,
      phone,
      rollNo,
      department,
      year,
      interests,
      whyJoin,
      idea,
      date: submissionDate
    };

    // Save to State & LocalStorage
    state.studentApplications.push(applicationData);
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(state.studentApplications));

    // Render Digital Pass
    if (resultCard) {
      resultCard.innerHTML = `
        <div class="membership-pass-card">
          <div class="pass-header">
            <div style="display: flex; align-items: center; gap: 0.8rem;">
              <span style="font-weight: 800; font-size: 1.1rem; color: #ffffff;">EDC BBIT</span>
              <span class="pass-badge">Membership Confirmed</span>
            </div>
            <span style="font-family: monospace; font-size: 0.85rem; color: #ffffff; letter-spacing: 0.05em;">${escapeHtml(applicationId)}</span>
          </div>

          <div class="pass-body">
            <div class="pass-meta">
              <h4>${escapeHtml(name)}</h4>
              <p>${escapeHtml(department)} • ${escapeHtml(year)}</p>
              
              <div class="pass-details-row">
                <div>
                  <div style="font-size: 0.72rem; text-transform: uppercase;">Roll / ID</div>
                  <strong style="color: #ffffff;">${escapeHtml(rollNo || 'Pending')}</strong>
                </div>
                <div>
                  <div style="font-size: 0.72rem; text-transform: uppercase;">Issue Date</div>
                  <strong style="color: #ffffff;">${escapeHtml(submissionDate)}</strong>
                </div>
                <div>
                  <div style="font-size: 0.72rem; text-transform: uppercase;">Status</div>
                  <strong style="color: #ffffff; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em;">● Active Member</strong>
                </div>
              </div>

              ${interests.length > 0 ? `
                <div style="margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.4rem;">
                  ${interests.map(i => `<span class="init-tag" style="font-size: 0.7rem;">${escapeHtml(i)}</span>`).join('')}
                </div>
              ` : ''}
            </div>

            <div class="pass-qr-mock" title="Official EDC BBIT Digital ID">
              <svg viewBox="0 0 24 24">
                <path d="M2,2H10V10H2V2M4,4V8H8V4H4M14,2H22V10H14V2M16,4V8H20V4H16M2,14H10V22H2V14M4,16V20H8V16H4M20,20V22H18V20H16V18H20V16H22V20H20M18,14V18H14V14H18M14,20V22H12V18H14V20M20,14V16H18V14H20M10,12V14H8V12H10M12,10V12H10V10H12M14,10V12H12V10H14M16,12V14H14V12H16M12,14V16H10V14H12M10,18V20H8V18H10M8,10V8H10V10H8M12,8V6H14V8H12M16,8V6H18V8H16M8,6V4H10V6H8M12,4V2H14V4H12M6,10V12H4V10H6M4,12V14H2V12H4Z" />
              </svg>
            </div>
          </div>

          <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.8rem;">
            <span style="font-size: 0.82rem; color: var(--text-dim);">Screenshot or save this pass for orientation & workshops.</span>
            <a href="https://www.linkedin.com/company/ed-cell-bbit/" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">Follow EDC LinkedIn</a>
          </div>
        </div>
      `;
      resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    form.reset();
    showToast(`Registration Successful! Welcome to EDC BBIT, ${name}!`, 'success');
  });
}

/**
 * FAQ Accordion Single-Open behavior
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });
}

/**
 * Export Team Data as JSON
 */
function exportTeamData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.teamMembers, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "edc-bbit-core-team.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Core team data exported as edc-bbit-core-team.json', 'info');
}

/**
 * Reset Team to Seed Data
 */
function resetTeamData() {
  if (confirm('Are you sure you want to reset the core team directory to default?')) {
    state.teamMembers = [...INITIAL_EDC_DATA.coreMembers];
    localStorage.setItem(STORAGE_KEYS.TEAM, JSON.stringify(state.teamMembers));
    renderTeam();
    showToast('Team directory reset to defaults.', 'info');
  }
}

/**
 * Toast Notification System
 */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : 'ℹ️'}</span>
    <div style="flex-grow: 1;">${escapeHtml(message)}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Expose globally for inline button handlers and browser console
if (typeof window !== 'undefined') {
  window.showToast = showToast;
}

// Helpers
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getInitials(name) {
  if (!name) return 'ED';
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
}

function getRandomGradient() {
  const gradients = [
    'linear-gradient(135deg, #27272a, #09090b)',
    'linear-gradient(135deg, #3f3f46, #18181b)',
    'linear-gradient(135deg, #52525b, #27272a)',
    'linear-gradient(135deg, #18181b, #000000)',
    'linear-gradient(135deg, #71717a, #27272a)'
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
}

function getIconSvg(iconName) {
  switch (iconName) {
    case 'rocket':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>';
    case 'code':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';
    case 'cpu':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>';
    case 'globe':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';
    case 'trending-up':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>';
    case 'zap':
    default:
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>';
  }
}
