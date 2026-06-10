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
    if (!overlay) return;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Overlay-Formular lazy initialisieren
    const target = document.getElementById('hs-overlay-form');
    if (target && !target.dataset.loaded && window.hbspt) {
      hbspt.forms.create({
        region: "eu1",
        portalId: "148643626",
        formId: "7b0a4ee5-95a9-4f7b-8103-ec589e9b52ed",
        target: "#hs-overlay-form",
        css: ""
      });
      target.dataset.loaded = "true";
    }
  };
  window.closeTermin = () => {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };
  if (overlay) {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeTermin(); });
  }
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

/* ─── MULTI-STEP FORM ─── */

/* ─── MULTI-STEP FORM ─── */
const MSF_TOTAL = 8;

function msfUpdateProgress(page, prefix) {
  const total = MSF_TOTAL;
  const pct = Math.round((page / total) * 100);

  // Prozent-Label
  const lbl = document.getElementById(prefix + '-progress-pct');
  if (lbl) lbl.textContent = pct + '%';

  // Fülllinie: von Dot 1 bis zum aktuellen Dot
  // Breite = (page-1)/(total-1) * 100% (von erstem bis letztem Dot)
  const fill = document.getElementById(prefix + '-progress-fill');
  if (fill) {
    const fillPct = total > 1 ? ((page - 1) / (total - 1)) * 100 : 0;
    fill.style.width = fillPct + '%';
  }

  // Dots updaten
  for (let i = 1; i <= total; i++) {
    const step = document.getElementById(prefix + '-step-' + i);
    if (!step) continue;
    step.classList.remove('active', 'done');
    if (i < page) step.classList.add('done');
    else if (i === page) step.classList.add('active');
  }
}

function msfGoTo(page) {
  document.querySelectorAll('.contact-form-box .msf-page').forEach(p => p.classList.remove('active'));
  const target = document.querySelector(`.contact-form-box .msf-page[data-page="${page}"]`);
  if (target) target.classList.add('active');
  msfUpdateProgress(page, 'msf');
}

function msfNext(currentPage) {
  if (currentPage === 1) {
    const sel = document.querySelector('input[name="website_vorhanden"]:checked');
    if (!sel) { alert('Bitte wählen Sie eine Option aus.'); return; }
  }
  msfGoTo(currentPage + 1);
}

function msfNextText(currentPage, fieldId, isOverlay) {
  const val = document.getElementById(fieldId)?.value.trim();
  if (!val) { alert('Bitte füllen Sie dieses Feld aus.'); return; }
  if (isOverlay) msfGoToOv(currentPage + 1);
  else msfGoTo(currentPage + 1);
}

function msfBack(currentPage) {
  msfGoTo(currentPage - 1);
}

// Karten-Interaktion: Radio → sofort weiter, Checkbox → toggle
document.addEventListener('DOMContentLoaded', function() {
  // Initialen Zustand setzen
  msfUpdateProgress(1, 'msf');
  msfUpdateProgress(1, 'ov');
  document.querySelectorAll('.msf-radio, .msf-check').forEach(label => {
    label.addEventListener('click', function() {
      const input = this.querySelector('input');
      if (!input) return;

      if (input.type === 'radio') {
        document.querySelectorAll(`input[name="${input.name}"]`).forEach(s => {
          s.checked = false;
          s.closest('label').classList.remove('selected');
        });
        input.checked = true;
        this.classList.add('selected');

        const page = parseInt(this.closest('.msf-page').dataset.page);
        const isOverlay = !!this.closest('#hs-overlay-form');
        setTimeout(() => {
          if (isOverlay) msfGoToOv(page + 1);
          else msfGoTo(page + 1);
        }, 300);

      } else {
        input.checked = !input.checked;
        this.classList.toggle('selected', input.checked);
      }
    });
  });
});

async function msfSubmit() {
  const firstname       = document.getElementById('msf-firstname')?.value.trim();
  const lastname        = document.getElementById('msf-lastname')?.value.trim();
  const email           = document.getElementById('msf-email')?.value.trim();
  const phone           = document.getElementById('msf-phone')?.value.trim();
  const errorEl         = document.getElementById('msf-error');

  if (!firstname || !lastname || !email) { errorEl.style.display = 'block'; return; }
  errorEl.style.display = 'none';

  const websiteVorhanden    = document.querySelector('input[name="website_vorhanden"]:checked')?.value || '';
  const designvorlage       = document.querySelector('input[name="designvorlage"]:checked')?.value || '';
  const domainUndHosting    = document.querySelector('input[name="domain_und_hosting"]:checked')?.value || '';
  const unternehmensgrundung = document.querySelector('input[name="unternehmensgrundung"]:checked')?.value || '';
  const fertigstellung      = document.querySelector('input[name="fertigstellung"]:checked')?.value || '';
  const unternehmensart     = document.getElementById('msf-unternehmensart')?.value.trim() || '';
  const websitePflege       = document.querySelector('input[name="website_pflege"]:checked')?.value || '';

  const btn = document.querySelector('.contact-form-box .msf-btn-submit');
  btn.textContent = 'Wird gesendet…'; btn.disabled = true;

  try {
    const res = await fetch(
      'https://api.hsforms.com/submissions/v3/integration/submit/148643626/7b0a4ee5-95a9-4f7b-8103-ec589e9b52ed',
      { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: [
          { objectTypeId: '0-1', name: 'firstname',            value: firstname },
          { objectTypeId: '0-1', name: 'lastname',             value: lastname },
          { objectTypeId: '0-1', name: 'email',                value: email },
          { objectTypeId: '0-1', name: 'phone',                value: phone },
          { objectTypeId: '0-1', name: 'website_vorhanden',    value: websiteVorhanden },
          { objectTypeId: '0-1', name: 'designvorlage',        value: designvorlage },
          { objectTypeId: '0-1', name: 'domain_und_hosting',   value: domainUndHosting },
          { objectTypeId: '0-1', name: 'unternehmensgrundung', value: unternehmensgrundung },
          { objectTypeId: '0-1', name: 'fertigstellung',       value: fertigstellung },
          { objectTypeId: '0-1', name: 'unternehmensart',      value: unternehmensart },
          { objectTypeId: '0-1', name: 'website_pflege',       value: websitePflege },
        ], context: { pageUri: window.location.href, pageName: document.title } })
      }
    );
    if (res.ok) { msfGoTo(9); }
    else { btn.textContent = 'Fehler – nochmal versuchen'; btn.disabled = false; }
  } catch(e) { btn.textContent = 'Fehler – nochmal versuchen'; btn.disabled = false; }
}

/* ─── OVERLAY MULTI-STEP FORM ─── */
function msfGoToOv(page) {
  const container = document.getElementById('hs-overlay-form');
  if (!container) return;
  container.querySelectorAll('.msf-page').forEach(p => p.classList.remove('active'));
  const target = container.querySelector(`.msf-page[data-page="${page}"]`);
  if (target) target.classList.add('active');
  msfUpdateProgress(page, 'ov');
}

function msfNextOv(p) {
  if (p === 1) {
    const sel = document.querySelector('input[name="ov_website_vorhanden"]:checked');
    if (!sel) { alert('Bitte wählen Sie eine Option aus.'); return; }
  }
  msfGoToOv(p + 1);
}

function msfBackOv(p) { msfGoToOv(p - 1); }

async function msfSubmitOv() {
  const firstname        = document.getElementById('ov-firstname')?.value.trim();
  const lastname         = document.getElementById('ov-lastname')?.value.trim();
  const email            = document.getElementById('ov-email')?.value.trim();
  const phone            = document.getElementById('ov-phone')?.value.trim();
  const errorEl          = document.getElementById('ov-error');
  if (!firstname || !lastname || !email) { errorEl.style.display = 'block'; return; }
  errorEl.style.display = 'none';

  const websiteVorhanden    = document.querySelector('input[name="ov_website_vorhanden"]:checked')?.value || '';
  const designvorlage       = document.querySelector('input[name="ov_designvorlage"]:checked')?.value || '';
  const domainUndHosting    = document.querySelector('input[name="ov_domain_und_hosting"]:checked')?.value || '';
  const unternehmensgrundung = document.querySelector('input[name="ov_unternehmensgrundung"]:checked')?.value || '';
  const fertigstellung      = document.querySelector('input[name="ov_fertigstellung"]:checked')?.value || '';
  const unternehmensart     = document.getElementById('ov-unternehmensart')?.value.trim() || '';
  const websitePflege       = document.querySelector('input[name="ov_website_pflege"]:checked')?.value || '';

  const btn = document.querySelector('#hs-overlay-form .msf-btn-submit');
  btn.textContent = 'Wird gesendet…'; btn.disabled = true;

  try {
    const res = await fetch(
      'https://api.hsforms.com/submissions/v3/integration/submit/148643626/7b0a4ee5-95a9-4f7b-8103-ec589e9b52ed',
      { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: [
          { objectTypeId: '0-1', name: 'firstname',            value: firstname },
          { objectTypeId: '0-1', name: 'lastname',             value: lastname },
          { objectTypeId: '0-1', name: 'email',                value: email },
          { objectTypeId: '0-1', name: 'phone',                value: phone },
          { objectTypeId: '0-1', name: 'website_vorhanden',    value: websiteVorhanden },
          { objectTypeId: '0-1', name: 'designvorlage',        value: designvorlage },
          { objectTypeId: '0-1', name: 'domain_und_hosting',   value: domainUndHosting },
          { objectTypeId: '0-1', name: 'unternehmensgrundung', value: unternehmensgrundung },
          { objectTypeId: '0-1', name: 'fertigstellung',       value: fertigstellung },
          { objectTypeId: '0-1', name: 'unternehmensart',      value: unternehmensart },
          { objectTypeId: '0-1', name: 'website_pflege',       value: websitePflege },
        ], context: { pageUri: window.location.href, pageName: document.title } })
      }
    );
    if (res.ok) { msfGoToOv(9); }
    else { btn.textContent = 'Fehler – nochmal versuchen'; btn.disabled = false; }
  } catch(e) { btn.textContent = 'Fehler – nochmal versuchen'; btn.disabled = false; }
}