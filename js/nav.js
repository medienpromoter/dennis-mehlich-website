/* ─────────────────────────────────────────────
   Shared navigation bar
   Renders <nav id="navbar"> into any element with
   id="site-nav". On index.html the section links use
   in-page anchors (#hero); on all other pages they
   point back to index.html#hero etc.
   ───────────────────────────────────────────── */
(function () {
  // Are we on the homepage? (index.html or site root "/")
  var path = window.location.pathname;
  var isHome = /(\/|index\.html)$/.test(path) || path === '' || path === '/';
  var p = isHome ? '' : 'index.html';

  var links = [
    { href: p + '#hero',       label: 'Home' },
    { href: p + '#leistungen', label: 'Leistungen' },
    { href: p + '#ueber-mich', label: 'Über mich' },
    { href: p + '#kontakt',    label: 'Kontakt' },
    { href: 'preiskalkulator.html', label: 'Preiskalkulator' }
  ];

  // "Termin buchen" scrollt zum Buchungskalender in der CTA-Sektion (#termin)
  var ctaHref  = isHome ? '#termin' : 'index.html#termin';
  var ctaExtra = '';
  // CTA in der Leiste (Desktop / breitere Screens)
  var cta = '<a href="' + ctaHref + '"' + ctaExtra + ' class="nav-cta">Termin buchen</a>';
  // Gleicher CTA als zentrierter Eintrag im Klappmenü (nur auf schmalen Screens sichtbar)
  var ctaMenuItem = '<li class="nav-cta-li"><a href="' + ctaHref + '"' + ctaExtra +
    ' class="nav-cta nav-cta-menu">Termin buchen</a></li>';

  var html =
    '<nav id="navbar">' +
      '<a href="index.html" class="nav-logo">' +
        '<img src="images/logo.png" alt="Dennis Mehlich" ' +
        'style="width:auto;display:block;mix-blend-mode:multiply;">' +
      '</a>' +
      '<button class="nav-toggle" id="nav-toggle" type="button" ' +
        'aria-label="Menü öffnen" aria-expanded="false" aria-controls="nav-links">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
      '<ul class="nav-links" id="nav-links">' +
        links.map(function (l) {
          return '<li><a href="' + l.href + '">' + l.label + '</a></li>';
        }).join('') +
        ctaMenuItem +
      '</ul>' +
      cta +
    '</nav>';

  function mount() {
    var slot = document.getElementById('site-nav');
    if (slot) {
      slot.outerHTML = html;
    }
    // Re-apply the scroll effect now that the navbar exists
    var navbar = document.getElementById('navbar');
    if (navbar) {
      var onScroll = function () {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      };
      onScroll();
      window.addEventListener('scroll', onScroll);

      // Mobile-Menü (Hamburger) auf-/zuklappen
      var toggle = document.getElementById('nav-toggle');
      var navLinks = document.getElementById('nav-links');
      if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
          var open = navbar.classList.toggle('nav-open');
          toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
          toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
        });
        // Beim Klick auf einen Link das Menü wieder schließen
        navLinks.addEventListener('click', function (e) {
          if (e.target.closest('a')) {
            navbar.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Menü öffnen');
          }
        });
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
