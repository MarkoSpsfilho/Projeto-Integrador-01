// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Smooth active nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(l => {
    l.style.color = l.getAttribute('href') === '#' + current ? 'var(--text)' : '';
  });
});

// Slideshow de Certificados
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function mostrarSlide(n) {
  slides.forEach(slide => slide.style.display = 'none');
  if (n >= totalSlides) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = totalSlides - 1;
  }
  
  if (slides[currentSlide]) {
    slides[currentSlide].style.display = 'block';
    const indicador = document.getElementById('slideIndicador');
    if (indicador) {
      indicador.textContent = `${currentSlide + 1} / ${totalSlides}`;
    }
  }
}

function mudaSlide(n) {
  currentSlide += n;
  mostrarSlide(currentSlide);
}

// Inicializar slideshow
if (slides.length > 0) {
  mostrarSlide(currentSlide);
}

// ── Certificados Slideshow (novo) ──
let certAtual = 0;
const certSlides = document.querySelectorAll('.cert-slide');
const certDotEls = document.querySelectorAll('.cert-dot');
const certTotal = certSlides.length;

function certMostra(n) {
  certSlides.forEach(s => s.classList.remove('active'));
  certDotEls.forEach(d => d.classList.remove('active'));
  if (n >= certTotal) certAtual = 0;
  else if (n < 0) certAtual = certTotal - 1;
  else certAtual = n;
  if (certSlides[certAtual]) {
    certSlides[certAtual].classList.add('active');
    if (certDotEls[certAtual]) certDotEls[certAtual].classList.add('active');
    const ind = document.getElementById('certIndicador');
    if (ind) ind.textContent = `${certAtual + 1} / ${certTotal}`;
  }
}
function certMuda(n) { certMostra(certAtual + n); }
function certVai(n) { certMostra(n); }
if (certSlides.length > 0) certMostra(0);
