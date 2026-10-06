/* XU HANGCHENG® — hero-3d.js
   Tilt cards ([data-tilt]): rotateX max -9deg / rotateY max 12deg, eased by
   0.09 lerp per frame; a highlight follows the cursor. The mouse anywhere
   over the whole hero stage drives the tilt (not just over the card); on
   mouse leave the card settles back to 0.
   Scroll fade: [data-hero] dissolves smoothly over 60% of a viewport, and
   the .hero-display big title dissolves as it reaches the top of the screen.
   Disabled under 800px and for reduced-motion users. */

(function () {
  'use strict';

  if (!window.matchMedia) return;
  if (window.matchMedia('(max-width: 799px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var EASING = 0.09;      // lerp factor
  var MAX_X = 9;          // rotateX magnitude (max -9deg)
  var MAX_Y = 12;         // rotateY magnitude (max 12deg)

  var cards = document.querySelectorAll('[data-tilt]');

  cards.forEach(function (card) {
    var highlight = card.querySelector('.tilt-highlight');
    var stage = card.closest('.hero-stage') || card;
    var curX = 0, curY = 0;
    var tgtX = 0, tgtY = 0;
    var hovering = false;
    var raf = null;

    stage.addEventListener('mousemove', function (e) {
      // whole hero stage drives the tilt
      var sr = stage.getBoundingClientRect();
      var px = (e.clientX - sr.left) / sr.width;
      var py = (e.clientY - sr.top) / sr.height;
      tgtY = (px - 0.5) * 2 * MAX_Y;
      tgtX = (py - 0.5) * 2 * -MAX_X;
      hovering = true;
      // highlight stays locked to the card itself
      if (highlight) {
        var cr = card.getBoundingClientRect();
        highlight.style.setProperty('--hx', ((e.clientX - cr.left) / cr.width * 100) + '%');
        highlight.style.setProperty('--hy', ((e.clientY - cr.top) / cr.height * 100) + '%');
      }
      if (!raf) loop();
    });

    stage.addEventListener('mouseleave', function () {
      tgtX = 0;
      tgtY = 0;
      hovering = false;
      if (!raf) loop();
    });

    function loop() {
      curX += (tgtX - curX) * EASING;
      curY += (tgtY - curY) * EASING;
      card.style.transform =
        'perspective(1200px) rotateX(' + curX + 'deg) rotateY(' + curY + 'deg)';
      var settled = !hovering && Math.abs(curX) < 0.05 && Math.abs(curY) < 0.05;
      if (settled) {
        card.style.transform =
          'perspective(1200px) rotateX(0deg) rotateY(0deg)';
        raf = null;
        return;
      }
      raf = window.requestAnimationFrame(loop);
    }
  });

  /* ---- scroll-linked fade, smooth, tied to actual scroll position ---- */
  var hero = document.querySelector('[data-hero]');
  var display = document.querySelector('.hero-display');

  function clamp01(v) { return Math.min(1, Math.max(0, v)); }

  function onScroll() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;

    // hero: dissolve over the first 60% of a viewport (slow, not 8%)
    if (hero) {
      hero.style.opacity = String(clamp01(1 - y / (vh * 0.6)));
    }
    // big DESIGN / PORTFOLIO title: full opacity until its top reaches 40% of
    // the viewport, then dissolve as it approaches the top edge
    if (display) {
      var r = display.getBoundingClientRect();
      display.style.opacity = String(clamp01(r.top / (vh * 0.4)));
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
})();
