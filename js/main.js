// ==================================================================
// DR. FERNANDO PEQUENO — LANDING PAGE
// JS mínimo: menu mobile + ano dinâmico no rodapé.
// Sem dependências externas de propósito, para manter o site leve.
// ==================================================================

document.addEventListener('DOMContentLoaded', function () {

  // Menu mobile (abre/fecha)
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu ao clicar em um link (útil em mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Ano automático no rodapé
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
