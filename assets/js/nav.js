/* XU HANGCHENG® — nav.js
   Fixed top navigation. Under 800px the links collapse behind a hamburger
   toggle: click opens/closes, ESC closes, and clicking any link closes it
   (page navigation reloads, anchors are closed preemptively). */

(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  function closeMenu() {
    links.classList.remove('open');
    toggle.classList.remove('open');
  }

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });
})();
