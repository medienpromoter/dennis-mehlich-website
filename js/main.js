/**
 * js/main.js – Interaktionen & Dynamik
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll effect ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ── Termin Overlay ── */
  const overlay = document.getElementById('termin-overlay');
  window.openTermin = () => {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeTermin = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };
  overlay.addEventListener('click', e => { if (e.target === overlay) closeTermin(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTermin(); });

  /* ── Reveal on scroll ── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObserver.observe(el));

  /* ── Typed Text ── */
  const words = ['verkaufen.', 'überzeugen.', 'Anfragen bringen.', 'gefunden werden.', 'für Sie arbeiten.'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedEl = document.querySelector('.typed-text');

  function type() {
    if (!typedEl) return;
    const current = words[wordIndex];
    if (isDeleting) {
      typedEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }
    let speed = isDeleting ? 60 : 100;
    if (!isDeleting && charIndex === current.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400;
    }
    setTimeout(type, speed);
  }
  setTimeout(type, 800);

  /* ── Counter Animation ── */
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 1500;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        el.classList.add('counting');
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
            el.classList.remove('counting');
          }
          el.textContent = Math.floor(current) + suffix;
        }, duration / steps);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  /* ── Process steps – scroll driven ── */
  const processSteps = document.querySelectorAll('.process-step');
  const timelineLine = document.querySelector('.process-steps');

  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.5 });
  processSteps.forEach(el => stepObserver.observe(el));

  /* ── Timeline scroll fill ── */
  if (timelineLine) {
    window.addEventListener('scroll', () => {
      const rect = timelineLine.getBoundingClientRect();
      const windowH = window.innerHeight;
      const total = timelineLine.offsetHeight;
      const visible = Math.min(windowH - rect.top, total);
      const percent = Math.max(0, Math.min(100, (visible / total) * 100));
      timelineLine.style.setProperty('--fill', percent + '%');
    });
  }

  /* ── HubSpot fallback ── */
  setTimeout(() => {
    document.querySelectorAll('.hs-form-frame').forEach(frame => {
      if (frame.children.length === 0) {
        const fallback = frame.nextElementSibling;
        if (fallback && fallback.classList.contains('hs-fallback')) {
          fallback.style.display = 'block';
        }
      }
    });
  }, 2500);

  /* ── Cookie Banner ── */
  initCookieBanner();
});

/* ══════════════════════════════════════
   COOKIE BANNER
══════════════════════════════════════ */
function initCookieBanner() {
  const consent = localStorage.getItem('cookie-consent');

  if (consent === 'accepted') {
    // Bereits akzeptiert → Chat sofort laden
    loadN8nChat();
    return;
  }

  if (consent === 'declined') {
    // Bereits abgelehnt → Banner nicht mehr zeigen
    return;
  }

  // Noch keine Entscheidung → Banner anzeigen
  showCookieBanner();
}

function showCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    setTimeout(() => banner.classList.add('visible'), 800);
  }
}

window.acceptCookies = () => {
  localStorage.setItem('cookie-consent', 'accepted');
  hideCookieBanner();
  loadN8nChat();
};

window.declineCookies = () => {
  localStorage.setItem('cookie-consent', 'declined');
  hideCookieBanner();
};

function hideCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
  }
}

/* ══════════════════════════════════════
   N8N CHAT – nur nach Cookie-Zustimmung
══════════════════════════════════════ */
function loadN8nChat() {
  if (typeof SITE_CONTENT === 'undefined') return;
  const { webhookUrl, welcomeMessages } = SITE_CONTENT.n8n;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
  document.head.appendChild(link);

  import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js').then(({ createChat }) => {
    createChat({
      webhookUrl,
      target: '#n8n-chat',
      mode: 'window',
      showWelcomeScreen: true,
      defaultLanguage: 'de',
      initialMessages: welcomeMessages,
      i18n: {
        de: {
          title: 'KI-Assistent',
          subtitle: 'Fragen zu Webdesign & KI',
          footer: '',
          getStarted: 'Gespräch starten',
          inputPlaceholder: 'Nachricht schreiben…',
          closeButtonTooltip: 'Schließen',
        }
      },
      theme: {
        '--chat--color-primary': '#0f1631',
        '--chat--color-primary-shade-50': '#1e3a8a',
        '--chat--color-primary-shade-100': '#1e3a8a',
        '--chat--color-secondary': '#3b82f6',
        '--chat--color-secondary-shade-50': '#60a5fa',
        '--chat--color-white': '#ffffff',
        '--chat--color-light': '#f0f4ff',
        '--chat--color-light-shade-50': '#e8f0fe',
        '--chat--color-light-shade-100': '#dbeafe',
        '--chat--color-medium': '#64748b',
        '--chat--color-dark': '#0f1631',
        '--chat--color-disabled': '#94a3b8',
        '--chat--color-typing': '#1e3a8a',
        '--chat--border-radius': '16px',
        '--chat--window--width': '380px',
        '--chat--window--height': '520px',
        '--chat--header--background': '#0f1631',
        '--chat--header--color': '#ffffff',
        '--chat--message--bot--background': '#f0f4ff',
        '--chat--message--bot--color': '#0f1631',
        '--chat--message--user--background': '#1e3a8a',
        '--chat--message--user--color': '#ffffff',
        '--chat--toggle--background': '#0f1631',
        '--chat--toggle--hover--background': '#1e3a8a',
        '--chat--toggle--active--background': '#1e3a8a',
        '--chat--toggle--color': '#ffffff',
        '--chat--toggle--size': '60px',
      }
    });
  }).catch(err => console.warn('n8n chat failed to load', err));
}