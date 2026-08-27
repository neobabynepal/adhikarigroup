/**
 * ADHIKARI GROUP - CORE APPLICATION ARCHITECTURE & INTERACTIVE ENGINE
 */

(function () {
  'use strict';

  // 1. STATE & STORAGE MANAGEMENT
  const STORAGE_KEY = 'adhikari_group_cms_data_v10';
  let appState = loadState();

  function loadState() {
    try {
      localStorage.removeItem('adhikari_group_cms_data_v1');
      localStorage.removeItem('adhikari_group_cms_data_v2');
      localStorage.removeItem('adhikari_group_cms_data_v3');
      localStorage.removeItem('adhikari_group_cms_data_v4');
      localStorage.removeItem('adhikari_group_cms_data_v5');
      localStorage.removeItem('adhikari_group_cms_data_v6');
      localStorage.removeItem('adhikari_group_cms_data_v7');
      localStorage.removeItem('adhikari_group_cms_data_v8');
      localStorage.removeItem('adhikari_group_cms_data_v9');

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not load stored state, fallback to default", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
      console.error("Failed to save state", e);
    }
  }

  // Helper SVG Icons
  const ICONS = {
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    building: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
    store: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    award: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    network: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>`
  };

  // 2. HERO SLIDER LOGIC (Clean Simple Neutral Overlay - No Blue Gradient)
  function initHeroSlider() {
    const track = document.getElementById('hero-slider-track');
    if (!track) return;

    track.innerHTML = '';

    const slide = appState.heroSlides[0];
    const slideDiv = document.createElement('div');
    slideDiv.className = 'hero-slide active';

    const mediaHtml = slide.videoUrl
      ? `<video autoplay muted loop playsinline poster="${slide.imageUrl}">
          <source src="${slide.videoUrl}" type="video/mp4">
         </video>`
      : `<img src="${slide.imageUrl}" alt="Hero Banner">`;

    slideDiv.innerHTML = `
      <div class="hero-media-wrapper">${mediaHtml}</div>
      <div class="hero-overlay"></div>
      <div class="container hero-content-container">
        <div class="hero-content-box">
          <span class="section-tag">${appState.tagline}</span>
          <h1 class="hero-headline">Leading Nepal's Baby Care Journey</h1>
          <p class="hero-subtitle">${slide.subtitle}</p>
          <div class="hero-cta-group">
            <a href="#${slide.primaryCtaTarget}" class="btn btn-orange">
              ${slide.primaryCtaText} ${ICONS.arrowRight}
            </a>
            <a href="#${slide.secondaryCtaTarget}" class="btn btn-outline-white">
              ${slide.secondaryCtaText}
            </a>
          </div>
        </div>
      </div>
    `;
    track.appendChild(slideDiv);
  }

  // 3. RENDER ALL SECTIONS
  function renderAll() {
    renderUtilityHeader();
    initHeroSlider();
    renderStorySection();
    renderAboutSection();
    renderCompaniesSection();
    renderBrandsSection();
    renderStatistics();
    renderChairmanSection();
    renderGallerySection();
    renderContactSection();
    renderFooter();
  }

  // Utility Header
  function renderUtilityHeader() {
    const phoneEl = document.getElementById('util-phone');
    const hqEl = document.getElementById('util-hq');
    const emailEl = document.getElementById('util-email');

    if (phoneEl) phoneEl.textContent = appState.utility.telephone;
    if (hqEl) hqEl.textContent = appState.utility.headquarters;
    if (emailEl) emailEl.textContent = appState.utility.email;
  }

  // Storytelling Section
  function renderStorySection() {
    const container = document.getElementById('story-grid-container');
    if (!container) return;

    const featured = appState.stories.find(s => s.featured) || appState.stories[0];
    const sideStories = appState.stories.filter(s => s.id !== featured.id);

    container.innerHTML = `
      <div class="featured-story-card" onclick="window.openStoryModal('${featured.id}')">
        <img src="${featured.image}" class="featured-story-bg" alt="${featured.title}">
        <div class="featured-story-overlay"></div>
        <div class="featured-story-content">
          <div class="story-meta">
            <span class="story-badge">${featured.category}</span>
            <span class="story-date">${featured.date}</span>
          </div>
          <h3 class="featured-story-title">${featured.title}</h3>
          <p style="font-size:0.925rem; color:rgba(255,255,255,0.9);">${featured.description}</p>
        </div>
      </div>

      <div class="story-side-list">
        ${sideStories.map(story => `
          <div class="side-story-card" onclick="window.openStoryModal('${story.id}')">
            <img src="${story.image}" class="side-story-img" alt="${story.title}">
            <div>
              <div class="story-meta" style="margin-bottom:0.25rem;">
                <span class="story-badge" style="font-size:0.65rem; padding:0.15rem 0.5rem;">${story.category}</span>
                <span class="story-date" style="color:var(--color-text-muted); font-size:0.75rem;">${story.date}</span>
              </div>
              <h4 class="side-story-title">${story.title}</h4>
              <p style="font-size:0.825rem; color:var(--color-text-muted);">${story.description.substring(0, 90)}...</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // About Section
  function renderAboutSection() {
    const descEl = document.getElementById('about-short-desc');
    const fullDescEl = document.getElementById('about-full-desc');
    const valuesContainer = document.getElementById('about-values-grid');

    if (descEl) descEl.textContent = appState.about.shortDescription;
    if (fullDescEl) fullDescEl.textContent = appState.about.fullDescription;

    if (valuesContainer) {
      valuesContainer.innerHTML = appState.about.values.map(v => `
        <div class="value-item">
          <div class="value-title">${v.title}</div>
          <div class="value-desc">${v.desc}</div>
        </div>
      `).join('');
    }
  }

  // Companies Section & Filtering
  let activeCompanyFilter = 'all';

  function renderCompaniesSection() {
    const grid = document.getElementById('companies-grid');
    const filterTabsContainer = document.getElementById('company-filter-tabs');
    if (!grid) return;

    const categories = [
      { id: 'all', label: 'All Businesses' },
      { id: 'import', label: 'Import & Ops' },
      { id: 'distribution', label: 'Distribution' },
      { id: 'retail', label: 'Retail Chains' },
      { id: 'b2b', label: 'B2B Commerce' },
      { id: 'dealership', label: 'Regional Dealers' }
    ];

    if (filterTabsContainer) {
      filterTabsContainer.innerHTML = categories.map(cat => `
        <button class="filter-tab ${activeCompanyFilter === cat.id ? 'active' : ''}" onclick="window.setCompanyFilter('${cat.id}')">
          ${cat.label}
        </button>
      `).join('');
    }

    const filtered = activeCompanyFilter === 'all'
      ? appState.companies
      : appState.companies.filter(c => c.filterCategory === activeCompanyFilter);

    grid.innerHTML = filtered.map(comp => `
      <div class="company-card">
        <div class="company-card-header">
          <img src="${comp.image}" class="company-card-img" alt="${comp.name}">
          <span class="company-category-badge">${comp.category}</span>
        </div>
        <div class="company-card-body">
          <h3 class="company-name">${comp.name}</h3>
          <div class="company-tagline">${comp.tagline}</div>
          <p class="company-short-desc">${comp.shortDesc}</p>
          
          <div class="company-brands-pills">
            ${comp.brands && comp.brands.length > 0 ? comp.brands.map(b => `<span class="brand-pill">${b.name} (${b.role})</span>`).join('') : ''}
            ${comp.branches && comp.branches.length > 0 ? `<span class="brand-pill" style="background:#FEF3C7; color:#92400E; border-color:#FDE68A;">${comp.branches.length} Retail Branches</span>` : ''}
          </div>
        </div>
        <div class="company-card-footer">
          <button class="btn btn-outline" style="font-size:0.85rem; padding:0.45rem 0.9rem;" onclick="window.openCompanyModal('${comp.id}')">
            View Details ${ICONS.arrowRight}
          </button>
        </div>
      </div>
    `).join('');
  }

  window.setCompanyFilter = function (filterId) {
    activeCompanyFilter = filterId;
    renderCompaniesSection();
  };

  // 4. BRANDS ECOSYSTEM SECTION & ALPHABET NAVIGATION (#225071)
  let activeBrandLetter = 'ALL';

  function renderBrandsSection() {
    const grid = document.getElementById('brands-grid');
    const navContainer = document.getElementById('brand-alpha-nav');
    if (!grid) return;

    // Render Alphabet and Number Navigation
    if (navContainer) {
      const letters = ['ALL', 'B', 'M', 'N', 'P', '0-9'];
      navContainer.innerHTML = letters.map(letter => `
        <button class="alpha-btn ${activeBrandLetter === letter ? 'active' : ''}" onclick="window.setBrandFilter('${letter}')">
          ${letter}
        </button>
      `).join('');
    }

    // Filter Brands
    const filteredBrands = activeBrandLetter === 'ALL'
      ? appState.brands
      : appState.brands.filter(b => {
        if (activeBrandLetter === '0-9') {
          return /^[0-9]/.test(b.name);
        }
        return (b.letter || b.name.charAt(0).toUpperCase()) === activeBrandLetter;
      });

    grid.innerHTML = filteredBrands.map(brand => {
      // Small dedicated logo / image area (preserves proportions, no distortion)
      const logoHtml = brand.logo && !brand.isPlaceholder
        ? `<div class="brand-logo-frame">
            <img src="${brand.logo}" class="brand-logo-img" alt="${brand.name} Logo">
           </div>`
        : `<div class="brand-logo-placeholder">
            <div class="brand-placeholder-title">${brand.name}</div>
            <div class="brand-placeholder-sub">Logo Space</div>
           </div>`;

      const websiteUrl = brand.website && brand.website !== '#' ? brand.website : '';
      const displayUrl = brand.displayUrl || (websiteUrl ? websiteUrl.replace(/^https?:\/\//, '') : '');

      return `
        <div class="brand-card" onclick="window.openBrandModal('${brand.id}')">
          <div>
            ${logoHtml}
            <div class="brand-card-top">
              <div class="brand-origin-badge">Origin: ${brand.origin}</div>
              <h3 class="brand-title">${brand.name}</h3>
              <div class="brand-category-text">${brand.category}</div>
              <div class="brand-rel-tag">${brand.relationship}</div>
              <p class="brand-desc">${brand.shortDesc || brand.description || ''}</p>
            </div>
          </div>
          <div>
            <div style="font-size:0.78rem; color:rgba(255,255,255,0.7); margin-bottom:0.4rem;">Associated Companies:</div>
            <div style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:1rem;">
              ${brand.companies.map(c => `<span style="font-size:0.72rem; padding:0.15rem 0.45rem; background:rgba(255,255,255,0.12); border-radius:4px; border:1px solid rgba(255,255,255,0.2);">${c}</span>`).join('')}
            </div>

            <div style="margin-bottom:0.85rem; font-size:0.85rem; display:flex; align-items:center; flex-wrap:wrap; gap:0.25rem;">
              <span style="color:rgba(255,255,255,0.7); font-size:0.8rem;">Website:</span>
              ${websiteUrl ? `
                <a href="${websiteUrl}" target="_blank" rel="noopener noreferrer" class="brand-website-link" onclick="event.stopPropagation();" style="display:inline-flex; align-items:center; gap:0.25rem; font-size:0.825rem;">
                  ${displayUrl} ${ICONS.externalLink}
                </a>
              ` : `
                <span style="color:rgba(255,255,255,0.85); font-weight:600; font-size:0.825rem;">Area of Services</span>
              `}
            </div>

            <button class="btn btn-orange" style="width:100%; font-size:0.85rem; padding:0.6rem 0.9rem;" onclick="event.stopPropagation(); window.openBrandModal('${brand.id}');">
              View More ${ICONS.arrowRight}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  window.setBrandFilter = function (letter) {
    activeBrandLetter = letter;
    renderBrandsSection();
  };

  // Statistics Section
  function renderStatistics() {
    const grid = document.getElementById('stats-grid');
    if (!grid) return;

    grid.innerHTML = appState.statistics.map(stat => `
      <div class="stat-card">
        <div style="color:#EE7626; margin-bottom:0.4rem;">${ICONS[stat.icon] || ICONS.building}</div>
        <div class="stat-number">${stat.number}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }

  // Bottom Picture Scroller Gallery (images loaded from 'images/gallery/')
  function renderGallerySection() {
    const track = document.getElementById('photo-scroller-track');
    if (!track) return;

    const images = (appState && appState.galleryImages && appState.galleryImages.length > 0)
      ? appState.galleryImages
      : (DEFAULT_DATA.galleryImages || []);

    track.innerHTML = images.map(item => `
      <div class="photo-item" onclick="window.openPhotoModal('${item.src}', '${item.alt || ''}')">
        <img src="${item.src}" class="photo-img" alt="${item.alt || 'Gallery Photo'}" loading="lazy">
      </div>
    `).join('');

    initPhotoScrollerControls();
  }

  // Scroller navigation and drag-to-scroll controls
  function initPhotoScrollerControls() {
    const track = document.getElementById('photo-scroller-track');
    const prevBtn = document.getElementById('scroller-prev-btn');
    const nextBtn = document.getElementById('scroller-next-btn');
    if (!track) return;

    function getScrollStep() {
      const firstItem = track.querySelector('.photo-item');
      if (firstItem) {
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 24;
        return firstItem.offsetWidth + gap;
      }
      return 344;
    }

    if (prevBtn) {
      prevBtn.onclick = (e) => {
        e.preventDefault();
        track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
      };
    }

    if (nextBtn) {
      nextBtn.onclick = (e) => {
        e.preventDefault();
        track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
      };
    }

    // Drag to scroll
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    track.onmousedown = (e) => {
      isDown = true;
      track.style.cursor = 'grabbing';
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };

    track.onmouseleave = () => {
      isDown = false;
      track.style.cursor = 'grab';
    };

    track.onmouseup = () => {
      isDown = false;
      track.style.cursor = 'grab';
    };

    track.onmousemove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    };
  }

  // Photo View Modal (borderless — image only, click anywhere outside it to close)
  window.openPhotoModal = function (src, caption) {
    const modal = document.getElementById('general-modal');
    const modalContent = document.getElementById('modal-dynamic-content');
    const modalContainer = modal ? modal.querySelector('.modal-container') : null;
    const closeBtn = document.getElementById('modal-close-button');
    if (!modal || !modalContent) return;

    if (modalContainer) modalContainer.classList.add('photo-view');
    if (closeBtn) closeBtn.style.display = 'none';

    modalContent.innerHTML = `
      <img src="${src}" alt="${caption || ''}" class="photo-view-img" onclick="event.stopPropagation();">
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Chairman Section
  function renderChairmanSection() {
    const portraitEl = document.getElementById('chairman-portrait');
    const bodyEl = document.getElementById('chairman-full-body');

    if (portraitEl && appState.chairman.portrait) {
      portraitEl.src = appState.chairman.portrait;
    }

    if (bodyEl && appState.chairman.paragraphs) {
      bodyEl.innerHTML = appState.chairman.paragraphs.map(p =>
        `<p>${p.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#225071;">$1</strong>')}</p>`
      ).join('');
    }
  }

  // Contact Section
  function renderContactSection() {
    const hqEl = document.getElementById('contact-hq');
    const phoneEl = document.getElementById('contact-phone');
    const emailEl = document.getElementById('contact-email');

    if (hqEl) hqEl.textContent = appState.contact.headquarters;
    if (phoneEl) phoneEl.textContent = appState.contact.telephone;
    if (emailEl) emailEl.textContent = appState.contact.email;
  }

  // Footer Links
  function renderFooter() {
    const compList = document.getElementById('footer-companies');
    const brandList = document.getElementById('footer-brands');
    const footPhone = document.getElementById('footer-phone');
    const footEmail = document.getElementById('footer-email');

    if (compList) {
      compList.innerHTML = appState.companies.map(c => `
        <li><a href="#companies" onclick="window.openCompanyModal('${c.id}')">${c.name}</a></li>
      `).join('');
    }

    if (brandList) {
      brandList.innerHTML = appState.brands.map(b => `
        <li><a href="#brands" onclick="window.openBrandModal('${b.id}')">${b.name}</a></li>
      `).join('');
    }

    if (footPhone) footPhone.textContent = appState.utility.telephone;
    if (footEmail) footEmail.textContent = appState.utility.email;
  }

  // ==========================================================================
  // 5. MODAL SYSTEM WITH PROMINENT X / CLOSE (NO RELOAD REQUIRED)
  // ==========================================================================

  // Brand Detail Modal
  window.openBrandModal = function (brandId) {
    const brand = appState.brands.find(b => b.id === brandId);
    if (!brand) return;

    const modal = document.getElementById('general-modal');
    const modalContent = document.getElementById('modal-dynamic-content');

    const logoHtml = brand.logo && !brand.isPlaceholder
      ? `<img src="${brand.logo}" alt="${brand.name}" style="height:55px; max-width:160px; object-fit:contain; background:#FFFFFF; padding:6px 12px; border-radius:6px;">`
      : `<div style="background:rgba(255,255,255,0.2); border:1px dashed #FFFFFF; padding:6px 14px; border-radius:6px; font-weight:700; color:#FFFFFF;">${brand.name}</div>`;

    const websiteUrl = brand.website && brand.website !== '#' ? brand.website : '';
    const displayUrl = brand.displayUrl || (websiteUrl ? websiteUrl.replace(/^https?:\/\//, '') : '');

    const paragraphsHtml = Array.isArray(brand.fullDesc)
      ? brand.fullDesc.map(para => `<p style="margin-bottom:1rem;">${para}</p>`).join('')
      : `<p style="margin-bottom:1rem;">${brand.fullDesc || brand.shortDesc || brand.description || ''}</p>`;

    modalContent.innerHTML = `
      <div class="modal-hero">
        <div class="modal-hero-content" style="width:100%; display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:1rem;">
          <div>
            <span class="section-tag" style="background:rgba(255,255,255,0.2); color:#FFFFFF; border-color:rgba(255,255,255,0.4);">${brand.category}</span>
            <h2 style="font-family:var(--font-heading); font-size:2rem; font-weight:700; color:#FFFFFF; margin:0.2rem 0;">${brand.name}</h2>
            <div style="color:rgba(255,255,255,0.9); font-size:0.9rem;">Origin: <strong>${brand.origin}</strong> | ${brand.relationship}</div>
          </div>
          <div>${logoHtml}</div>
        </div>
      </div>

      <div class="modal-body">
        <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700; color:#225071; margin-bottom:0.5rem;">About the Brand</h4>
        <div style="color:var(--color-text-muted); line-height:1.7; margin-bottom:1.5rem; font-size:0.95rem;">
          ${paragraphsHtml}
        </div>

        <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700; color:#225071; margin-bottom:0.6rem;">Represented & Distributed Via</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.75rem;">
          ${brand.companies.map(c => `<span class="brand-pill" style="font-size:0.85rem; padding:0.35rem 0.75rem;">${c}</span>`).join('')}
        </div>

        <div style="border-top:1px solid var(--color-border); padding-top:1.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
          <div>
            <span style="font-size:0.85rem; color:var(--color-text-muted);">Website:</span>
            ${websiteUrl ? `
              <a href="${websiteUrl}" target="_blank" rel="noopener noreferrer" class="company-website-link" style="color:#EE7626; font-weight:700; font-size:0.85rem; margin-left:0.35rem; display:inline-flex; align-items:center; gap:0.25rem; text-decoration:none;">
                ${displayUrl} ${ICONS.externalLink}
              </a>
            ` : `
              <strong style="color:#225071; font-size:0.85rem; margin-left:0.35rem;">Area of Services</strong>
            `}
          </div>
          <button class="btn btn-navy" onclick="window.closeModal();">
            Close Brand Details
          </button>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Company Detail Modal
  window.openCompanyModal = function (companyId) {
    const company = appState.companies.find(c => c.id === companyId);
    if (!company) return;

    const modal = document.getElementById('general-modal');
    const modalContent = document.getElementById('modal-dynamic-content');

    const websiteUrl = company.website && company.website !== '#' ? company.website : '';
    const displayUrl = company.displayUrl || (websiteUrl ? websiteUrl.replace(/^https?:\/\//, '') : '');

    modalContent.innerHTML = `
      <div class="modal-hero">
        <img src="${company.image}" class="modal-hero-img" alt="${company.name}">
        <div class="modal-hero-content">
          <span class="section-tag" style="background:rgba(255,255,255,0.2); color:#FFFFFF; border-color:rgba(255,255,255,0.4);">${company.category}</span>
          <h2 style="font-family:var(--font-heading); font-size:1.85rem; font-weight:700; color:#FFFFFF; margin:0.2rem 0;">${company.name}</h2>
          <div style="color:rgba(255,255,255,0.9); font-size:0.9rem;">${company.tagline}</div>
        </div>
      </div>

      <div class="modal-body">
        <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700; color:#225071; margin-bottom:0.4rem;">Company Overview</h4>
        <div style="color:var(--color-text-muted); line-height:1.7; margin-bottom:1.5rem; font-size:0.95rem;">
          ${Array.isArray(company.fullDesc)
        ? company.fullDesc.map(para => `<p style="margin-bottom:1rem;">${para}</p>`).join('')
        : `<p>${company.fullDesc || company.shortDesc}</p>`
      }
        </div>
        <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700; color:#225071; margin-bottom:0.6rem;">Core Operations</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.45rem; margin-bottom:1.5rem;">
          ${company.functions ? company.functions.map(fn => `<span class="brand-pill" style="background:#225071; color:#FFFFFF; border-color:#225071;">${fn}</span>`).join('') : ''}
        </div>

        ${company.brands && company.brands.length > 0 ? `
          <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700; color:#225071; margin-bottom:0.6rem;">Associated Brands & Portfolio</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(230px, 1fr)); gap:0.85rem; margin-bottom:1.5rem;">
            ${company.brands.map(b => {
        const matchedBrand = appState.brands.find(br =>
          br.name.toLowerCase() === b.name.toLowerCase() ||
          br.name.toLowerCase().includes(b.name.toLowerCase()) ||
          b.name.toLowerCase().includes(br.name.toLowerCase()) ||
          br.id.toLowerCase() === (b.id || '').toLowerCase()
        );
        const brandWebsite = (b.website && b.website !== '#')
          ? b.website
          : (matchedBrand && matchedBrand.website && matchedBrand.website !== '#' ? matchedBrand.website : '');
        const displayBrandSite = b.displayUrl || (matchedBrand && matchedBrand.displayUrl) || (brandWebsite ? brandWebsite.replace(/^https?:\/\//, '') : '');

        const cardInner = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <div style="font-weight:700; color:#225071;">${b.name}</div>
                  ${brandWebsite ? `<span style="color:#EE7626; margin-left:0.25rem;">${ICONS.externalLink}</span>` : ''}
                </div>
                <div style="font-size:0.75rem; color:#5A6A7E; font-weight:600;">${b.role} ${b.origin ? `(${b.origin})` : (matchedBrand && matchedBrand.origin ? `(${matchedBrand.origin})` : '')}</div>
                <p style="font-size:0.8rem; color:var(--color-text-muted); margin-top:0.25rem;">${b.desc || (matchedBrand && matchedBrand.shortDesc) || ''}</p>
                ${brandWebsite ? `<div style="margin-top:0.4rem; font-size:0.75rem; font-weight:700; color:#EE7626;">${displayBrandSite}</div>` : ''}
              `;

        if (brandWebsite) {
          return `
                  <a href="${brandWebsite}" target="_blank" rel="noopener noreferrer" class="company-brand-card-link">
                    ${cardInner}
                  </a>
                `;
        } else {
          return `
                  <div style="background:var(--color-bg-light); border:1px solid var(--color-border); padding:0.9rem; border-radius:var(--radius-sm);">
                    ${cardInner}
                  </div>
                `;
        }
      }).join('')}
          </div>
        ` : ''}

        ${company.branches && company.branches.length > 0 ? `
          <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700; color:#225071; margin-bottom:0.4rem;">Branch Locations (${company.branches.length} Branches)</h4>
          <div class="branch-cards-grid">
            ${company.branches.map(br => `
              <div class="branch-card">
                <div style="font-weight:700; color:#225071; font-size:0.9rem;">${br.name}</div>
                <div style="font-size:0.8rem; color:var(--color-text-muted);">${br.location}</div>
                <div style="font-size:0.75rem; color:#225071; margin-top:0.3rem;">Hours: ${br.hours}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div style="margin-top:1.75rem; padding-top:1.25rem; border-top:1px solid var(--color-border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
          <div>
            <span style="font-size:0.85rem; color:var(--color-text-muted);">Website:</span>
            ${websiteUrl ? `
              <a href="${websiteUrl}" target="_blank" rel="noopener noreferrer" class="company-website-link" style="color:#EE7626; font-weight:700; font-size:0.85rem; margin-left:0.35rem; display:inline-flex; align-items:center; gap:0.25rem; text-decoration:none;">
                ${displayUrl} ${ICONS.externalLink}
              </a>
            ` : `
              <strong style="color:#225071; font-size:0.85rem; margin-left:0.35rem;">Area of Services${company.location ? ` (${company.location})` : ''}</strong>
            `}
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Story Reader Modal
  window.openStoryModal = function (storyId) {
    const story = appState.stories.find(s => s.id === storyId);
    if (!story) return;

    const modal = document.getElementById('general-modal');
    const modalContent = document.getElementById('modal-dynamic-content');

    modalContent.innerHTML = `
      <div class="modal-hero">
        <img src="${story.image}" class="modal-hero-img" alt="${story.title}">
        <div class="modal-hero-content">
          <span class="section-tag" style="background:rgba(255,255,255,0.2); color:#FFFFFF; border-color:rgba(255,255,255,0.4);">${story.category}</span>
          <h2 style="font-family:var(--font-heading); font-size:1.75rem; font-weight:700; color:#FFFFFF; margin:0.2rem 0;">${story.title}</h2>
          <div style="color:rgba(255,255,255,0.85); font-size:0.85rem;">Published: ${story.date}</div>
        </div>
      </div>
      <div class="modal-body">
        <p style="font-size:1rem; font-weight:600; color:#225071; margin-bottom:1rem; line-height:1.6;">${story.description}</p>
        <p style="color:var(--color-text-muted); line-height:1.75; font-size:0.95rem;">${story.content}</p>
        <div style="margin-top:1.75rem; padding-top:1.25rem; border-top:1px solid var(--color-border); display:flex; justify-content:flex-end;">
          <button class="btn btn-navy" onclick="window.closeModal();">Close News Update</button>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Chairman Message Modal
  window.openChairmanModal = function () {
    const modal = document.getElementById('general-modal');
    const modalContent = document.getElementById('modal-dynamic-content');

    const formattedParagraphs = appState.chairman.paragraphs
      .map(p => `<p style="margin-bottom:1rem; line-height:1.75; color:var(--color-text-main);">${p}</p>`)
      .join('');

    modalContent.innerHTML = `
      <div class="modal-hero" style="background: #225071; padding: 2rem;">
        <div style="display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;">
          <img src="${appState.chairman.portrait}" alt="${appState.chairman.name}" style="width:90px; height:90px; border-radius:50%; object-fit:cover; object-position:top center; border:3px solid #EE7626; flex-shrink:0;">
          <div>
            <span class="section-tag" style="background:rgba(255,255,255,0.2); color:#FFFFFF; border-color:rgba(255,255,255,0.4);">Executive Leadership</span>
            <h2 style="font-family:var(--font-heading); font-size:1.65rem; font-weight:700; color:#FFFFFF; margin:0.2rem 0;">Message From The Chairman</h2>
            <div style="color:#EE7626; font-weight:700; font-size:0.95rem;">${appState.chairman.name}</div>
            <div style="color:rgba(255,255,255,0.8); font-size:0.825rem;">${appState.chairman.title}</div>
          </div>
        </div>
      </div>
      <div class="modal-body">
        <div style="font-family:var(--font-heading); font-size:1.05rem; font-weight:600; color:#225071; margin-bottom:1.25rem; font-style:italic; padding-left:0.85rem; border-left:3px solid #EE7626;">
          "${appState.chairman.quote}"
        </div>
        <div style="font-size:0.95rem; margin-bottom:1.5rem;">
          ${formattedParagraphs}
        </div>
        <div style="border-top:1px solid var(--color-border); padding-top:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
          <div>
            <div style="font-family:var(--font-heading); font-size:1rem; font-weight:700; color:#225071;">${appState.chairman.name}</div>
            <div style="font-size:0.8rem; color:var(--color-text-muted);">${appState.chairman.title}</div>
          </div>
          <button class="btn btn-navy" onclick="window.closeModal();">Close Message</button>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Central Close Modal Function
  window.closeModal = function () {
    const modal = document.getElementById('general-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      const modalContainer = modal.querySelector('.modal-container');
      if (modalContainer) modalContainer.classList.remove('photo-view');
      const closeBtn = document.getElementById('modal-close-button');
      if (closeBtn) closeBtn.style.display = '';
    }
  };

  // 6. FLOATING ADMIN CMS DRAWER & LIVE EDITING ENGINE
  function initAdminCMSDrawer() {
    const triggerBtn = document.getElementById('admin-cms-trigger');
    const drawer = document.getElementById('admin-cms-drawer');
    const closeBtn = document.getElementById('admin-cms-close');
    const body = document.getElementById('admin-cms-body');
    if (!triggerBtn || !drawer) return;

    triggerBtn.addEventListener('click', () => {
      renderAdminForm();
      drawer.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });

    function renderAdminForm() {
      body.innerHTML = `
        <div class="admin-section-box">
          <div class="admin-box-title">Utility Contact Information</div>
          <div class="form-group">
            <label class="form-label">Telephone</label>
            <input type="text" id="cms-phone" class="form-input" value="${appState.utility.telephone}">
          </div>
          <div class="form-group">
            <label class="form-label">Headquarters</label>
            <input type="text" id="cms-hq" class="form-input" value="${appState.utility.headquarters}">
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="text" id="cms-email" class="form-input" value="${appState.utility.email}">
          </div>
        </div>

        <div class="admin-section-box">
          <div class="admin-box-title">Chairman Information</div>
          <div class="form-group">
            <label class="form-label">Chairman Quote</label>
            <textarea id="cms-chairman-quote" class="form-textarea" rows="3">${appState.chairman.quote}</textarea>
          </div>
        </div>

        <div style="display:flex; gap:0.75rem; margin-top:1.5rem;">
          <button class="btn btn-orange" style="flex:1;" onclick="window.saveCMSChanges();">
            Save & Update
          </button>
          <button class="btn btn-outline" style="flex:1;" onclick="window.resetCMSDefaults();">
            Reset Defaults
          </button>
        </div>
      `;
    }

    window.saveCMSChanges = function () {
      appState.utility.telephone = document.getElementById('cms-phone').value;
      appState.utility.headquarters = document.getElementById('cms-hq').value;
      appState.utility.email = document.getElementById('cms-email').value;
      appState.chairman.quote = document.getElementById('cms-chairman-quote').value;

      saveState();
      renderAll();
      drawer.classList.remove('open');
      alert("Content updated successfully!");
    };

    window.resetCMSDefaults = function () {
      if (confirm("Reset website content to original Adhikari Group defaults?")) {
        localStorage.removeItem(STORAGE_KEY);
        appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
        renderAll();
        drawer.classList.remove('open');
      }
    };
  }

  // 7. INITIALIZATION & GLOBAL LISTENERS
  document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    initAdminCMSDrawer();

    // Close modal on outside backdrop click
    const generalModal = document.getElementById('general-modal');
    if (generalModal) {
      generalModal.addEventListener('click', (e) => {
        const container = generalModal.querySelector('.modal-container');
        const isPhotoView = container && container.classList.contains('photo-view');
        // For the photo view, any click that isn't directly on the image
        // (backdrop, padding, side space) closes the modal.
        if (e.target === generalModal || (isPhotoView && e.target.className !== 'photo-view-img')) {
          window.closeModal();
        }
      });
    }

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        window.closeModal();
        const drawer = document.getElementById('admin-cms-drawer');
        if (drawer) drawer.classList.remove('open');
        const mobileDrawer = document.getElementById('mobile-nav-drawer');
        const mobileOverlay = document.getElementById('mobile-nav-overlay');
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        if (mobileOverlay) mobileOverlay.classList.remove('open');
      }
    });

    // Active Navigation & Scroll Spy Engine
    initNavigation();

    // Mobile Hamburger Navigation
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const mobileOverlay = document.getElementById('mobile-nav-overlay');
    const mobileCloseBtn = document.getElementById('mobile-drawer-close');

    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', () => {
        if (mobileDrawer) mobileDrawer.classList.add('open');
        if (mobileOverlay) mobileOverlay.classList.add('open');
      });
    }

    if (mobileCloseBtn) {
      mobileCloseBtn.addEventListener('click', closeMobileNav);
    }
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', closeMobileNav);
    }

    function closeMobileNav() {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
      if (mobileOverlay) mobileOverlay.classList.remove('open');
    }

    function initNavigation() {
      const navLinks = document.querySelectorAll('.nav-menu .nav-link');
      const mobileLinks = document.querySelectorAll('.mobile-link');
      const sections = ['home', 'about', 'companies', 'brands', 'chairman', 'contact'];

      function setActiveLink(targetId) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${targetId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        mobileLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${targetId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }

      function scrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return;
        const headerHeight = document.getElementById('main-header')?.offsetHeight || 76;
        const topOffset = targetId === 'home' ? 0 : targetSection.offsetTop - headerHeight + 2;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
        history.pushState(null, null, `#${targetId}`);
      }

      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            if (sections.includes(targetId) || document.getElementById(targetId)) {
              e.preventDefault();
              setActiveLink(targetId);
              scrollToSection(targetId);
            }
          }
        });
      });

      mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          closeMobileNav();
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            if (sections.includes(targetId) || document.getElementById(targetId)) {
              e.preventDefault();
              setActiveLink(targetId);
              scrollToSection(targetId);
            }
          }
        });
      });

      // Scroll spy with accurate calculation
      let isTicking = false;
      window.addEventListener('scroll', () => {
        if (!isTicking) {
          window.requestAnimationFrame(() => {
            const scrollPos = window.scrollY;
            const headerHeight = document.getElementById('main-header')?.offsetHeight || 76;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            // Bottom of page -> contact
            if (scrollPos + windowHeight >= docHeight - 60) {
              setActiveLink('contact');
              isTicking = false;
              return;
            }

            // Top of page -> home
            if (scrollPos < 120) {
              setActiveLink('home');
              isTicking = false;
              return;
            }

            // Section detection
            let activeId = 'home';
            for (const id of sections) {
              const el = document.getElementById(id);
              if (el) {
                const top = el.offsetTop - headerHeight - 100;
                const height = el.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                  activeId = id;
                  break;
                }
              }
            }

            setActiveLink(activeId);
            isTicking = false;
          });
          isTicking = true;
        }
      });
    }

    // Header scroll shadow effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('main-header');
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });

    // Contact Form Submission
    const contactForm = document.getElementById('adhikari-contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for contacting Adhikari Group. Your inquiry has been received and our corporate team will get back to you shortly.");
        contactForm.reset();
      });
    }
  });

})();