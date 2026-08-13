// ============================================================
// STAFF ON MOVE — main script
// ============================================================

// ---------- Loading screen ----------
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hide'), 1200);
});
setTimeout(() => {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('hide');
}, 3500);

// ---------- Nav background on scroll ----------
const nav = document.getElementById('siteNav');
function onScrollNav(){
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}
document.addEventListener('scroll', onScrollNav, { passive: true });
onScrollNav();

// ---------- Scroll progress runner ----------
const progressFill = document.getElementById('progress-fill');
const progressRunner = document.getElementById('progress-runner');
function onScrollProgress(){
  const h = document.documentElement;
  const scrollTop = h.scrollTop || document.body.scrollTop;
  const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
  const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressFill.style.width = pct + '%';
  progressRunner.style.left = pct + '%';
  if (scrollTop > 20) progressRunner.classList.add('visible');
  else progressRunner.classList.remove('visible');
}
document.addEventListener('scroll', onScrollProgress, { passive: true });
onScrollProgress();

// ---------- Mascot click interaction ----------
document.querySelectorAll('.mascot-click').forEach(el => {
  el.addEventListener('click', (e) => {
    if (el.classList.contains('jump')) return;
    el.classList.add('jump');
    setTimeout(() => el.classList.remove('jump'), 550);
  });
});

// ============================================================
// TAB NAVIGATION (main + sub) with deep-link hash support
// ============================================================
const TAB_IDS = ['about', 'activities', 'other'];
const SUBTAB_IDS = ['overview', 'vol1', 'vol2', 'vol3'];

function activateTab(tabId, { updateHash = true, subtab = null } = {}) {
  if (!TAB_IDS.includes(tabId)) tabId = 'about';

  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('tab-' + tabId);
  if (panel) panel.classList.add('active');

  document.querySelectorAll('.nav-tab, .mobile-tab').forEach(btn => {
    const on = btn.dataset.tabLink === tabId;
    btn.classList.toggle('active', on);
    if (btn.classList.contains('nav-tab')) btn.setAttribute('aria-selected', on ? 'true' : 'false');
  });

  triggerRevealForPanel(panel);

  if (tabId === 'activities') {
    activateSubtab(subtab || currentSubtab || 'overview', { updateHash });
  } else if (updateHash) {
    history.replaceState(null, '', '#' + tabId);
  }

  window.scrollTo({ top: 0, behavior: 'auto' });
  if (typeof onScrollProgress === 'function') onScrollProgress();
  document.body.classList.remove('mobile-menu-open');
}

let currentSubtab = 'overview';
function activateSubtab(subtabId, { updateHash = true } = {}) {
  if (!SUBTAB_IDS.includes(subtabId)) subtabId = 'overview';
  currentSubtab = subtabId;

  document.querySelectorAll('.subtab-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('subtab-' + subtabId);
  if (panel) panel.classList.add('active');

  document.querySelectorAll('.sub-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subtabLink === subtabId);
  });

  triggerRevealForPanel(panel);
  refreshGalleryEdges();

  if (updateHash) {
    history.replaceState(null, '', '#activities/' + subtabId);
  }
}

function triggerRevealForPanel(panel) {
  if (!panel) return;
  const items = panel.querySelectorAll('.reveal-in');
  items.forEach((el, i) => {
    el.classList.remove('in');
    void el.offsetWidth; // restart animation
    setTimeout(() => el.classList.add('in'), 30 + i * 40);
  });
  // number counters
  panel.querySelectorAll('[data-count]').forEach(runCounter);
  // chart bars
  panel.querySelectorAll('.chart-fill').forEach(el => {
    el.style.width = '0%';
    requestAnimationFrame(() => {
      setTimeout(() => { el.style.width = el.dataset.width + '%'; }, 150);
    });
  });
}

// Nav + mobile tab click handlers
document.querySelectorAll('[data-tab-link]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    activateTab(el.dataset.tabLink);
  });
});
document.querySelectorAll('[data-subtab-link]').forEach(el => {
  el.addEventListener('click', () => activateSubtab(el.dataset.subtabLink));
});
document.querySelectorAll('[data-subtab-jump]').forEach(el => {
  el.addEventListener('click', () => {
    activateTab('activities', { subtab: el.dataset.subtabJump });
  });
});

// Parse initial hash: #about | #activities | #activities/vol2 | #other
function parseHashAndActivate() {
  const hash = location.hash.replace('#', '');
  if (!hash) { activateTab('about', { updateHash: false }); return; }
  const [tab, sub] = hash.split('/');
  activateTab(tab, { updateHash: false, subtab: sub });
}
window.addEventListener('DOMContentLoaded', parseHashAndActivate);
window.addEventListener('hashchange', parseHashAndActivate);

// Mobile burger
const navBurger = document.getElementById('navBurger');
const mobileTabs = document.getElementById('mobileTabs');
navBurger.addEventListener('click', () => {
  document.body.classList.toggle('mobile-menu-open');
});
document.querySelectorAll('.mobile-tab').forEach(btn => {
  btn.addEventListener('click', () => document.body.classList.remove('mobile-menu-open'));
});

// ============================================================
// i18n
// ============================================================
let currentLang = 'zh';
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const entry = I18N_DICT[el.dataset.i18n];
    if (entry) el.textContent = entry[lang] || entry.zh;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const entry = I18N_DICT[el.dataset.i18nHtml];
    if (entry) el.innerHTML = entry[lang] || entry.zh;
  });
  const toggle = document.getElementById('langToggle');
  toggle.textContent = lang === 'zh' ? 'EN' : '中';
  document.body.classList.toggle('lang-en', lang === 'en');
}
document.getElementById('langToggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'zh' ? 'en' : 'zh');
});

// ============================================================
// Countdown timer (HYBRID TRAINING — 2026-09-30 07:30 Taipei)
// ============================================================
const EVENT_DATE = new Date('2026-09-30T07:30:00+08:00');
function updateCountdown() {
  const card = document.getElementById('eventCard');
  const now = new Date();
  const diff = EVENT_DATE - now;
  if (diff <= 0) {
    if (card) card.style.display = 'none';
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const pad = n => String(n).padStart(2, '0');
  document.getElementById('cdDays').textContent = d;
  document.getElementById('cdHours').textContent = pad(h);
  document.getElementById('cdMins').textContent = pad(m);
  document.getElementById('cdSecs').textContent = pad(s);
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ============================================================
// Number counters
// ============================================================
function runCounter(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';
  const target = parseInt(el.dataset.count, 10) || 0;
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(tick);
}

// ============================================================
// Gallery: desktop-friendly scrolling (arrows / drag / wheel)
// ============================================================
document.querySelectorAll('.gallery').forEach(gallery => {
  gallery.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      gallery.scrollLeft += e.deltaY;
    }
  }, { passive: false });

  let isDown = false, startX = 0, startScroll = 0, moved = false;
  gallery.addEventListener('mousedown', (e) => {
    isDown = true; moved = false;
    gallery.classList.add('dragging');
    startX = e.pageX; startScroll = gallery.scrollLeft;
  });
  window.addEventListener('mouseup', () => { isDown = false; gallery.classList.remove('dragging'); });
  gallery.addEventListener('mouseleave', () => { isDown = false; gallery.classList.remove('dragging'); });
  gallery.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const dx = e.pageX - startX;
    if (Math.abs(dx) > 4) moved = true;
    gallery.scrollLeft = startScroll - dx;
  });
  gallery.addEventListener('click', (e) => {
    if (moved) { e.preventDefault(); e.stopPropagation(); }
  }, true);
});

document.querySelectorAll('.gallery-arrow').forEach(btn => {
  btn.addEventListener('click', () => {
    const gallery = document.getElementById(btn.dataset.target);
    if (!gallery) return;
    const card = gallery.querySelector('img');
    const step = card ? card.getBoundingClientRect().width + 16 : 300;
    gallery.scrollBy({ left: btn.classList.contains('next') ? step : -step, behavior: 'smooth' });
  });
});

function refreshGalleryEdges() {
  document.querySelectorAll('.gallery-wrap').forEach(wrap => {
    const gallery = wrap.querySelector('.gallery');
    const prev = wrap.querySelector('.prev');
    const next = wrap.querySelector('.next');
    if (!gallery || gallery.clientWidth === 0) return;
    const max = gallery.scrollWidth - gallery.clientWidth - 2;
    prev.disabled = gallery.scrollLeft <= 2;
    next.disabled = gallery.scrollLeft >= max;
  });
}
document.querySelectorAll('.gallery').forEach(g => g.addEventListener('scroll', refreshGalleryEdges, { passive: true }));
window.addEventListener('resize', refreshGalleryEdges);

// ============================================================
// Lightbox
// ============================================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCounter = document.getElementById('lightboxCounter');
let lightboxImages = [];
let lightboxIndex = 0;

document.querySelectorAll('.gallery').forEach(gallery => {
  const imgs = Array.from(gallery.querySelectorAll('img'));
  imgs.forEach((img, i) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      openLightbox(imgs, i);
    });
  });
});

function openLightbox(imgs, index) {
  lightboxImages = imgs;
  lightboxIndex = index;
  renderLightbox();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function renderLightbox() {
  const img = lightboxImages[lightboxIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}
function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  renderLightbox();
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => lightboxNav(-1));
document.getElementById('lightboxNext').addEventListener('click', () => lightboxNav(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxNav(-1);
  if (e.key === 'ArrowRight') lightboxNav(1);
});

// ============================================================
// Back to top
// ============================================================
const backToTop = document.getElementById('backToTop');
function onScrollBackToTop() {
  if (window.scrollY > 500) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
}
document.addEventListener('scroll', onScrollBackToTop, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ============================================================
// Init
// ============================================================
applyLanguage('zh');
refreshGalleryEdges();
