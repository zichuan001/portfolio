/* XU HANGCHENG® — scroll-reveal.js
   Sections with .reveal fade in + translate up 20px when entering the
   viewport at 14% threshold; plays exactly once. */

(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');

  if (!els.length) return;

  if (reduce || !('IntersectionObserver' in window)) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList.add('revealed');
    }
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var en = entries[i];
      if (en.isIntersecting) {
        en.target.classList.add('revealed');
        io.unobserve(en.target); // once only
      }
    }
  }, { threshold: 0.14 });

  for (var j = 0; j < els.length; j++) {
    io.observe(els[j]);
  }
})();
