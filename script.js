// ---------- Loading screen ----------
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hide');
  }, 1200);
});
// Fallback: never block the page longer than 3.5s
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

// ---------- Scroll progress + runner ----------
const fill = document.getElementById('progress-fill');
const runner = document.getElementById('progress-runner');
function onScrollProgress(){
  const h = document.documentElement;
  const scrollTop = h.scrollTop || document.body.scrollTop;
  const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
  const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  fill.style.width = pct + '%';
  runner.style.left = `calc(${pct}% )`;
  if (scrollTop > 20) runner.classList.add('visible');
  else runner.classList.remove('visible');
}
document.addEventListener('scroll', onScrollProgress, { passive: true });
onScrollProgress();

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => io.observe(el));

// ---------- Gallery: desktop-friendly scrolling ----------
document.querySelectorAll('.gallery').forEach(gallery => {
  // Mouse wheel -> horizontal scroll
  gallery.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      gallery.scrollLeft += e.deltaY;
    }
  }, { passive: false });

  // Click-and-drag to scroll
  let isDown = false;
  let startX = 0;
  let startScroll = 0;
  let moved = false;

  gallery.addEventListener('mousedown', (e) => {
    isDown = true;
    moved = false;
    gallery.classList.add('dragging');
    startX = e.pageX;
    startScroll = gallery.scrollLeft;
  });
  window.addEventListener('mouseup', () => {
    isDown = false;
    gallery.classList.remove('dragging');
  });
  gallery.addEventListener('mouseleave', () => {
    isDown = false;
    gallery.classList.remove('dragging');
  });
  gallery.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const dx = e.pageX - startX;
    if (Math.abs(dx) > 4) moved = true;
    gallery.scrollLeft = startScroll - dx;
  });
  // Prevent accidental image click/drag-ghosting after a real drag
  gallery.addEventListener('click', (e) => {
    if (moved) { e.preventDefault(); e.stopPropagation(); }
  }, true);
});

// Arrow buttons
document.querySelectorAll('.gallery-arrow').forEach(btn => {
  btn.addEventListener('click', () => {
    const gallery = document.getElementById(btn.dataset.target);
    if (!gallery) return;
    const card = gallery.querySelector('img');
    const step = card ? card.getBoundingClientRect().width + 16 : 300;
    gallery.scrollBy({ left: btn.classList.contains('next') ? step : -step, behavior: 'smooth' });
  });
});

// Disable arrow at scroll edges
document.querySelectorAll('.gallery-wrap').forEach(wrap => {
  const gallery = wrap.querySelector('.gallery');
  const prev = wrap.querySelector('.prev');
  const next = wrap.querySelector('.next');
  function updateEdges(){
    const max = gallery.scrollWidth - gallery.clientWidth - 2;
    prev.disabled = gallery.scrollLeft <= 2;
    next.disabled = gallery.scrollLeft >= max;
  }
  gallery.addEventListener('scroll', updateEdges, { passive: true });
  updateEdges();
});

// ---------- Chart bar fill ----------
const chartFills = document.querySelectorAll('.chart-fill');
const chartIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const el = entry.target;
      el.style.width = el.dataset.width + '%';
      chartIO.unobserve(el);
    }
  });
}, { threshold: 0.4 });
chartFills.forEach(el => chartIO.observe(el));
