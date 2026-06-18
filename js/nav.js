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
    { href: 'kalkulator.html', label: 'Preiskalkulator' }
  ];

  // "Termin buchen" opens the modal on the homepage, otherwise links there
  var cta = isHome
    ? '<a href="javascript:void(0)" onclick="typeof openTermin===\'function\' && openTermin()" class="nav-cta">Termin buchen</a>'
    : '<a href="index.html#kontakt" class="nav-cta">Termin buchen</a>';

  var html =
    '<nav id="navbar">' +
      '<a href="index.html" class="nav-logo">' +
        '<img src="images/logo.png" alt="Dennis Mehlich" ' +
        'style="height:72px;width:auto;display:block;mix-blend-mode:multiply;">' +
      '</a>' +
      '<ul class="nav-links">' +
        links.map(function (l) {
          return '<li><a href="' + l.href + '">' + l.label + '</a></li>';
        }).join('') +
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
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
