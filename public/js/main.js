/**
 * Filos Editora — Scripts de interatividade
 * Centralizado aqui para fácil edição no Claude Code.
 * Inicializado no DOMContentLoaded.
 */
document.addEventListener('DOMContentLoaded', () => {

// ===== HERO SLIDES =====
  let currentSlide = 0;
  const totalSlides = 3;
  let autoplay;

  function goToSlide(index) {
    document.querySelectorAll('.slide').forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.slide-dot').forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % totalSlides);
    resetAutoplay();
  }

  function prevSlide() {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
    resetAutoplay();
  }

  function startAutoplay() {
    autoplay = setInterval(nextSlide, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplay);
    startAutoplay();
  }

  document.getElementById('nextSlide').addEventListener('click', nextSlide);
  document.getElementById('prevSlide').addEventListener('click', prevSlide);

  document.querySelectorAll('.slide-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.slide));
      resetAutoplay();
    });
  });

  startAutoplay();

  // ===== HAMBURGER =====
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  function closeMobileNav() {
    mobileNav.classList.remove('open');
  }

  // ===== SCROLL ANIMATIONS =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up, .pop-in').forEach(el => {
    observer.observe(el);
  });

  // ===== PARALLAX =====
  const heroCircle = document.querySelector('.hero-deco-circle');
  const heroTri = document.querySelector('.hero-deco-triangle');
  const heroPill = document.querySelector('.hero-deco-pill');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (heroCircle) heroCircle.style.transform = `translateY(calc(-50% + ${y * 0.12}px))`;
    if (heroTri) heroTri.style.transform = `translateY(${y * 0.08}px) rotate(${y * 0.02}deg)`;
    if (heroPill) heroPill.style.transform = `translateY(${-y * 0.06}px)`;
  }, { passive: true });

  // ===== WHATSAPP FORM =====
  function sendToWhatsApp() {
    const nome = document.querySelector('input[placeholder="Seu nome completo"]').value || 'não informado';
    const servico = document.querySelector('select').value || 'não especificado';
    const msg = document.querySelector('textarea').value || '';
    const text = encodeURIComponent(
      `Olá! Sou ${nome} e tenho interesse em: ${servico}.\n\n${msg}`
    );
    window.open(`https://wa.me/5581999999999?text=${text}`, '_blank');
  }

  // ===== VITRINE FILTER =====
  function filterBooks(genre, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.book-card').forEach(card => {
      const match = genre === 'todos' || card.dataset.genre === genre;
      card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      if (match) {
        card.style.opacity = '1';
        card.style.transform = '';
        card.style.display = '';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.92)';
        setTimeout(() => {
          if (card.style.opacity === '0') card.style.display = 'none';
        }, 350);
      }
    });
  }

  // ===== HEADER SCROLL =====
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 30
      ? '0 4px 20px rgba(30,41,59,0.08)'
      : 'none';
  }, { passive: true });

});