/* XU HANGCHENG® — cursor.js
   Global mouse: black dot at cursor, continuous fading line trail,
   click ripple. Disabled on touch / coarse pointers and under 800px. */

(function () {
  'use strict';

  if (!window.matchMedia) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(max-width: 799px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var TRAIL_LIFE = 0.35; // seconds a point stays visible
  var TRAIL_PX = 50;    // max trail length in px
  var LINE_WIDTH = 3;

  var doc = document;

  var dot = doc.createElement('div');
  dot.className = 'cursor-dot';
  doc.body.appendChild(dot);

  var canvas = doc.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9998;';
  doc.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var pts = []; // {x,y,t}

  function tick() {
    var now = performance.now() / 1000;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts = pts.filter(function (p) { return now - p.t < TRAIL_LIFE; });
    if (pts.length > 1) {
      var head = pts[pts.length - 1];
      while (pts.length > 1) {
        var dx = pts[0].x - head.x, dy = pts[0].y - head.y;
        if (Math.sqrt(dx * dx + dy * dy) > TRAIL_PX) pts.shift();
        else break;
      }
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (var i = 1; i < pts.length; i++) {
        var p0 = pts[i - 1], p1 = pts[i];
        var age = now - p1.t;
        var a = Math.max(0, 1 - age / TRAIL_LIFE);
        ctx.strokeStyle = 'rgba(0,0,0,' + (a * 0.8).toFixed(3) + ')';
        ctx.lineWidth = LINE_WIDTH * a;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  doc.addEventListener('mousemove', function (e) {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    pts.push({ x: e.clientX, y: e.clientY, t: performance.now() / 1000 });
  });

  doc.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });
  doc.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });

  doc.addEventListener('click', function (e) {
    var r = doc.createElement('div');
    r.className = 'cursor-ripple';
    r.style.left = e.clientX + 'px';
    r.style.top = e.clientY + 'px';
    doc.body.appendChild(r);
    window.setTimeout(function () { if (r.parentNode) r.parentNode.removeChild(r); }, 650);
  });
})();
