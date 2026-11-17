/**
 * EDC BBIT - Official Website Core Application Script
 * Budge Budge Institute of Technology (BBIT), Kolkata
 * Developer & Organizer: Shruti Biswas
 */

(function () {
  "use strict";

  // Storage Keys
  const STORAGE_KEY_MEMBERS = "bbit_edc_core_members_v1";
  const STORAGE_KEY_APPLICATIONS = "bbit_edc_student_applications_v1";
  const STORAGE_KEY_THEME = "bbit_edc_theme";

  // State
  let activeFilter = "all";
  let searchQuery = "";
  let uploadedAvatarData = "";

  // DOM Elements Cache
  const teamGrid = document.getElementById("teamGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("teamSearchInput");
  const registerModal = document.getElementById("registerModal");
  const joinModal = document.getElementById("joinModal");
  const memberDetailModal = document.getElementById("memberDetailModal");
  const registerForm = document.getElementById("registerForm");
  const joinForm = document.getElementById("joinForm");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const mobileNavToggle = document.getElementById("mobileNavToggle");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  const avatarFileInput = document.getElementById("avatarFileInput");
  const avatarUploadTrigger = document.getElementById("avatarUploadTrigger");
  const avatarPreviewImg = document.getElementById("avatarPreviewImg");
  const avatarPreviewPlaceholder = document.getElementById("avatarPreviewPlaceholder");
  const exportTeamBtn = document.getElementById("exportTeamBtn");
  const resetTeamBtn = document.getElementById("resetTeamBtn");
  const toastContainer = document.getElementById("toastContainer");

  // ==========================================================================
  // Initialization
  // ==========================================================================
  function init() {
    initTheme();
    initMobileNav();
    initCoreMembers();
    initFaqAccordion();
    initModals();
    initPhotoUpload();
    initEventListeners();
  }

  // ==========================================================================
  // Theme Management
  // ==========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || "warm-dark";
    if (savedTheme === "warm-light") {
      document.documentElement.setAttribute("data-theme", "warm-light");
      updateThemeIcon(true);
    } else {
      document.documentElement.removeAttribute("data-theme");
      updateThemeIcon(false);
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme === "warm-light") {
          document.documentElement.removeAttribute("data-theme");
          localStorage.setItem(STORAGE_KEY_THEME, "warm-dark");
          updateThemeIcon(false);
          showToast("Switched to Warm Dark theme", "info");
        } else {
          document.documentElement.setAttribute("data-theme", "warm-light");
          localStorage.setItem(STORAGE_KEY_THEME, "warm-light");
          updateThemeIcon(true);
          showToast("Switched to Warm Light theme", "info");
        }
      });
    }
  }

  function updateThemeIcon(isLight) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = isLight
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    themeToggleBtn.setAttribute("title", isLight ? "Switch to Warm Dark Mode" : "Switch to Warm Light Mode");
  }

  // ==========================================================================
  // Mobile Navigation
  // ==========================================================================
  function initMobileNav() {
    if (!mobileNavToggle || !mobileNavDrawer) return;

    mobileNavToggle.addEventListener("click", () => {
      mobileNavDrawer.classList.toggle("open");
    });

    // Close when clicking link
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNavDrawer.classList.remove("open");
      });
    });
  }

  // ==========================================================================
  // Core Members Data & Rendering
  // ==========================================================================
  function getCoreMembers() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MEMBERS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Failed to read from localStorage", e);
    }
    // Fallback to initial seeds
    const initial = typeof INITIAL_CORE_MEMBERS !== "undefined" ? INITIAL_CORE_MEMBERS : [];
    saveCoreMembers(initial);
    return initial;
  }

  function saveCoreMembers(members) {
    try {
      localStorage.setItem(STORAGE_KEY_MEMBERS, JSON.stringify(members));
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  }

  function initCoreMembers() {
    renderTeamGrid();

    // Filters
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeFilter = btn.getAttribute("data-filter") || "all";
        renderTeamGrid();
      });
    });

    // Search
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = (e.target.value || "").toLowerCase().trim();
        renderTeamGrid();
      });
    }

    // Export Data Button
    if (exportTeamBtn) {
      exportTeamBtn.addEventListener("click", exportTeamData);
    }

    // Reset Data Button
    if (resetTeamBtn) {
      resetTeamBtn.addEventListener("click", resetTeamData);
    }
  }

  function renderTeamGrid() {
    if (!teamGrid) return;

    const allMembers = getCoreMembers();
    const filtered = allMembers.filter((m) => {
      const matchesCategory =
        activeFilter === "all" || m.category === activeFilter;
      const matchesSearch =
        !searchQuery ||
        m.name.toLowerCase().includes(searchQuery) ||
        m.designation.toLowerCase().includes(searchQuery) ||
        (m.department && m.department.toLowerCase().includes(searchQuery)) ||
        (m.bio && m.bio.toLowerCase().includes(searchQuery));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      teamGrid.innerHTML = `
        <div class="team-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:1rem; opacity:0.5;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h4>No core members found</h4>
          <p>Try adjusting your search query or filter category.</p>
        </div>
      `;
      return;
    }

    teamGrid.innerHTML = filtered.map((m) => createMemberCardHtml(m)).join("");

    // Attach card event listeners
    document.querySelectorAll(".view-profile-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const memberId = btn.getAttribute("data-id");
        openMemberDetailModal(memberId);
      });
    });
  }

  function getInitials(name) {
    if (!name) return "ED";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  }

  function createMemberCardHtml(member) {
    const isShruti =
      member.id === "shruti-biswas" ||
      member.name.toLowerCase().includes("shruti biswas") ||
      (member.designation && member.designation.toLowerCase().includes("developer") && member.designation.toLowerCase().includes("organizer"));

    const cardClass = `member-card ${isShruti ? "featured-developer" : ""}`;
    const initials = getInitials(member.name);

    let avatarHtml = "";
    if (member.avatar && member.avatar.length > 10) {
      avatarHtml = `<img src="${member.avatar}" alt="${escapeHtml(member.name)}" class="member-avatar" loading="lazy">`;
    } else {
      avatarHtml = `<div class="avatar-placeholder">${initials}</div>`;
    }

    const linkedInUrl = member.linkedin || "https://www.linkedin.com/company/ed-cell-bbit/";
    const githubUrl = member.github || "";
    const emailUrl = member.email ? `mailto:${member.email}` : "";

    return `
      <article class="${cardClass}" id="member-${member.id}">
        <div class="member-avatar-wrapper">
          ${avatarHtml}
          <span class="member-status-badge" title="Verified EDC Core Member">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#d8b276">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </span>
        </div>

        <h3 class="member-name">${escapeHtml(member.name)}</h3>
        <p class="member-designation">${escapeHtml(member.designation)}</p>
        <p class="member-dept">${escapeHtml(member.department || "BBIT Core Organizers")}${member.year ? ` • ${escapeHtml(member.year)}` : ""}</p>
        
        <p class="member-bio">${escapeHtml(member.bio || "Dedicated to driving entrepreneurship and incubation at Budge Budge Institute of Technology.")}</p>

        <div class="member-social-links">
          <a href="${escapeHtml(linkedInUrl)}" target="_blank" rel="noopener noreferrer" class="social-icon-btn linkedin" title="LinkedIn Profile">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          ${
            githubUrl
              ? `
            <a href="${escapeHtml(githubUrl)}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="GitHub / Portfolio">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>
          `
              : ""
          }
          ${
            emailUrl
              ? `
            <a href="${escapeHtml(emailUrl)}" class="social-icon-btn" title="Contact Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          `
              : ""
          }
          <button class="social-icon-btn view-profile-btn" data-id="${member.id}" title="View Full Profile">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </button>
        </div>
      </article>
    `;
  }

  // ==========================================================================
  // Core Member Registration Modal & Handling
  // ==========================================================================
  function initModals() {
    // Open Register Modal
    document.querySelectorAll(".open-register-modal-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(registerModal);
      });
    });

    // Open Student Join Modal
    document.querySelectorAll(".open-join-modal-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(joinModal);
      });
    });

    // Close buttons on all modals
    document.querySelectorAll(".modal-close-btn, .modal-cancel-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        closeAllModals();
      });
    });

    // Backdrop click
    document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          closeAllModals();
        }
      });
    });

    // Escape Key listener
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeAllModals();
      }
    });

    // Register Form Submit
    if (registerForm) {
      registerForm.addEventListener("submit", handleRegisterSubmit);
    }

    // Join Form Submit
    if (joinForm) {
      joinForm.addEventListener("submit", handleJoinSubmit);
    }
  }

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeAllModals() {
    document.querySelectorAll(".modal-backdrop").forEach((m) => {
      m.classList.remove("active");
    });
    document.body.style.overflow = "";
  }

  function initPhotoUpload() {
    if (!avatarFileInput || !avatarUploadTrigger) return;

    avatarUploadTrigger.addEventListener("click", () => {
      avatarFileInput.click();
    });

    avatarFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        showToast("Please upload a valid image file (JPG, PNG, WebP).", "error");
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        showToast("Image size must be under 2MB for fast static delivery.", "error");
        return;
      }

      const reader = new FileReader();
      reader.onload = function (event) {
        uploadedAvatarData = event.target.result;
        if (avatarPreviewImg && avatarPreviewPlaceholder) {
          avatarPreviewImg.src = uploadedAvatarData;
          avatarPreviewImg.style.display = "block";
          avatarPreviewPlaceholder.style.display = "none";
        }
      };
      reader.readAsDataURL(file);
    });
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("regName").value.trim();
    const designation = document.getElementById("regDesignation").value.trim();
    const category = document.getElementById("regCategory").value;
    const department = document.getElementById("regDept").value.trim();
    const year = document.getElementById("regYear").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const linkedin = document.getElementById("regLinkedIn").value.trim();
    const github = document.getElementById("regGithub").value.trim();
    const bio = document.getElementById("regBio").value.trim();

    if (!name || !designation || !email) {
      showToast("Please fill in all required fields (Name, Designation, Email).", "error");
      return;
    }

    const newId = name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now().toString().slice(-4);

    const newMember = {
      id: newId,
      name: name,
      designation: designation,
      category: category,
      department: department || "BBIT",
      year: year || "Core Team",
      bio: bio || "Dedicated Core Member contributing to EDC BBIT's startup initiatives.",
      linkedin: linkedin || "https://www.linkedin.com/company/ed-cell-bbit/",
      github: github || "",
      email: email,
      badge: designation,
      isLeader: false,
      avatar: uploadedAvatarData || ""
    };

    const currentMembers = getCoreMembers();
    // Add new member right after Shruti (index 1) or at the top
    const shrinkIndex = currentMembers.findIndex((m) => m.id === "shruti-biswas");
    if (shrinkIndex !== -1) {
      currentMembers.splice(shrinkIndex + 1, 0, newMember);
    } else {
      currentMembers.unshift(newMember);
    }

    saveCoreMembers(currentMembers);
    renderTeamGrid();

    // Reset Form
    registerForm.reset();
    uploadedAvatarData = "";
    if (avatarPreviewImg && avatarPreviewPlaceholder) {
      avatarPreviewImg.src = "";
      avatarPreviewImg.style.display = "none";
      avatarPreviewPlaceholder.style.display = "block";
    }

    closeAllModals();
    showToast(`🎉 Welcome ${name}! You are registered as an EDC Core Member.`, "success");

    // Scroll smoothly to member card
    setTimeout(() => {
      const cardEl = document.getElementById(`member-${newId}`);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
        cardEl.style.boxShadow = "0 0 35px rgba(216, 178, 118, 0.7)";
        setTimeout(() => {
          cardEl.style.boxShadow = "";
        }, 2500);
      }
    }, 400);
  }

  // ==========================================================================
  // Student Join EDC Application Submit
  // ==========================================================================
  function handleJoinSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("joinName").value.trim();
    const roll = document.getElementById("joinRoll").value.trim();
    const dept = document.getElementById("joinDept").value.trim();
    const email = document.getElementById("joinEmail").value.trim();
    const phone = document.getElementById("joinPhone").value.trim();
    const reason = document.getElementById("joinReason").value.trim();

    // Checked domains
    const checkedDomains = Array.from(
      document.querySelectorAll("input[name='domain']:checked")
    ).map((cb) => cb.value);

    if (!name || !email || !roll) {
      showToast("Please fill in Name, University Roll, and Email.", "error");
      return;
    }

    const applicationId = `BBIT-EDC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const application = {
      id: applicationId,
      name,
      roll,
      dept,
      email,
      phone,
      domains: checkedDomains,
      reason,
      submittedAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_APPLICATIONS) || "[]");
      existing.push(application);
      localStorage.setItem(STORAGE_KEY_APPLICATIONS, JSON.stringify(existing));
    } catch (err) {
      console.warn("Storage error", err);
    }

    joinForm.reset();
    closeAllModals();

    showToast(`✨ Application Submitted! Reference ID: ${applicationId}. Check your email for orientation details.`, "success", 6000);
  }

  // ==========================================================================
  // Member Detail View Modal
  // ==========================================================================
  function openMemberDetailModal(memberId) {
    const members = getCoreMembers();
    const member = members.find((m) => m.id === memberId);
    if (!member || !memberDetailModal) return;

    const modalBody = memberDetailModal.querySelector(".modal-body");
    const initials = getInitials(member.name);

    let avatarHtml = "";
    if (member.avatar && member.avatar.length > 10) {
      avatarHtml = `<img src="${member.avatar}" alt="${escapeHtml(member.name)}" style="width:100px; height:100px; border-radius:50%; object-fit:cover; border:2px solid var(--accent-warm);">`;
    } else {
      avatarHtml = `<div style="width:100px; height:100px; border-radius:50%; background:var(--bg-surface-elevated); border:2px solid var(--accent-warm); display:flex; align-items:center; justify-content:center; font-family:var(--font-serif); font-size:2rem; color:var(--accent-warm);">${initials}</div>`;
    }

    modalBody.innerHTML = `
      <div style="text-align:center; margin-bottom:1.5rem;">
        <div style="display:inline-block; margin-bottom:1rem;">${avatarHtml}</div>
        <h3 style="font-size:1.5rem; margin-bottom:0.25rem;">${escapeHtml(member.name)}</h3>
        <p style="color:var(--accent-warm); font-weight:600; font-size:0.95rem;">${escapeHtml(member.designation)}</p>
        <p style="color:var(--text-muted); font-size:0.825rem; margin-top:0.25rem;">
          ${escapeHtml(member.department || "BBIT")}${member.year ? ` • ${escapeHtml(member.year)}` : ""}
        </p>
      </div>

      <div style="background:var(--bg-input); padding:1.25rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle); margin-bottom:1.5rem;">
        <h5 style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-bottom:0.5rem;">About & Responsibilities</h5>
        <p style="font-size:0.9rem; line-height:1.7; color:var(--text-secondary);">${escapeHtml(member.bio || "Active Core Member of EDC BBIT.")}</p>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem; color:var(--text-secondary);">
        <div style="display:flex; align-items:center; gap:0.6rem;">
          <strong style="color:var(--text-primary); min-width:80px;">Affiliation:</strong>
          <span>Entrepreneurship Development Cell, Budge Budge Institute of Technology</span>
        </div>
        ${
          member.email
            ? `
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <strong style="color:var(--text-primary); min-width:80px;">Email:</strong>
            <a href="mailto:${escapeHtml(member.email)}" style="color:var(--accent-warm);">${escapeHtml(member.email)}</a>
          </div>
        `
            : ""
        }
        <div style="display:flex; align-items:center; gap:0.6rem;">
          <strong style="color:var(--text-primary); min-width:80px;">LinkedIn:</strong>
          <a href="${escapeHtml(member.linkedin || "https://www.linkedin.com/company/ed-cell-bbit/")}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-warm); word-break:break-all;">
            ${escapeHtml(member.linkedin || "https://www.linkedin.com/company/ed-cell-bbit/")}
          </a>
        </div>
      </div>
    `;

    openModal(memberDetailModal);
  }

  // ==========================================================================
  // Export & Reset Data (For Shruti Biswas & EDC Admin)
  // ==========================================================================
  function exportTeamData() {
    const data = getCoreMembers();
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `edc-bbit-team-roster-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast("📥 Exported edc-bbit-team-roster.json successfully!", "success");
  }

  function resetTeamData() {
    if (confirm("Reset core members to initial team roster? Any locally added test members will be restored to defaults.")) {
      const initial = typeof INITIAL_CORE_MEMBERS !== "undefined" ? INITIAL_CORE_MEMBERS : [];
      saveCoreMembers(initial);
      renderTeamGrid();
      showToast("Restored default core team roster.", "info");
    }
  }

  // ==========================================================================
  // FAQ Accordion
  // ==========================================================================
  function initFaqAccordion() {
    const faqContainer = document.getElementById("faqList");
    if (!faqContainer) return;

    const faqs = typeof EDC_FAQS !== "undefined" ? EDC_FAQS : [];
    faqContainer.innerHTML = faqs
      .map(
        (faq, idx) => `
        <div class="faq-item ${idx === 0 ? "active" : ""}">
          <button class="faq-question-btn" type="button" aria-expanded="${idx === 0 ? "true" : "false"}">
            <span>${escapeHtml(faq.q)}</span>
            <span class="faq-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
          <div class="faq-answer" style="${idx === 0 ? "max-height: 250px;" : ""}">
            <div class="faq-answer-inner">
              ${escapeHtml(faq.a)}
            </div>
          </div>
        </div>
      `
      )
      .join("");

    const items = faqContainer.querySelectorAll(".faq-item");
    items.forEach((item) => {
      const btn = item.querySelector(".faq-question-btn");
      const answer = item.querySelector(".faq-answer");

      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        items.forEach((other) => {
          other.classList.remove("active");
          other.querySelector(".faq-question-btn").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-answer").style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add("active");
          btn.setAttribute("aria-expanded", "true");
          answer.style.maxHeight = answer.scrollHeight + 30 + "px";
        }
      });
    });
  }

  // ==========================================================================
  // Toast Notification System
  // ==========================================================================
  function showToast(message, type = "info", duration = 4000) {
    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "toast";

    let iconSvg = "";
    if (type === "success") {
      iconSvg = `<svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    } else if (type === "error") {
      iconSvg = `<svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    } else {
      iconSvg = `<svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d8b276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div class="toast-content">
        <p>${escapeHtml(message)}</p>
      </div>
    `;

    toastContainer.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    // Auto remove
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  }

  // ==========================================================================
  // Helper Utilities
  // ==========================================================================
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function initEventListeners() {
    // Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#" || targetId === "") return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Launch on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
