/* Site-wide fundraising banner (October 2026 Crowdfund UC Davis drive).
   Included once near the top of <body> on every page:
     <script src="banner.js"></script>
   Edit the text here and it changes everywhere. The banner hides itself after
   the campaign closes (GiveCampus: ends Nov 1, 2026, 01:59 a.m. Eastern). */
(function () {
  var DONATE = 'https://giveto.ucdavis.edu/schools/UniversityofCaliforniaDavis/crowdfund-uc-davis-october-2026/pages/environmentors';
  var ENDS = Date.UTC(2026, 10, 1, 7, 0, 0); // 2026-11-01 07:00 UTC, just after close
  var KEY = 'em-banner-dismissed-oct2026';

  if (Date.now() > ENDS) return;
  try { if (window.localStorage.getItem(KEY) === '1') return; } catch (e) {}

  var onGive = /(^|\/)give\.html$/.test(window.location.pathname);
  var why = onGive ? '' : '<a class="fb-why" href="give.html">Why give?</a>';

  var html =
    '<div class="fundbar" id="fundbar" role="region" aria-label="October fundraising drive">' +
      '<button class="fb-close" type="button" aria-label="Dismiss this message">&times;</button>' +
      '<div class="fb-inner">' +
        '<p class="fb-head">Our October fundraising drive is on.</p>' +
        (onGive ? '' : '<p class="fb-count" id="fb-count" aria-live="off"></p>') +
        '<p class="fb-msg">EnvironMentors is free for every student and run entirely by volunteers. ' +
          'Our goal for October is $1,500. If everyone reading this gave $10, we would hit it. ' +
          'Anything makes a difference.</p>' +
        '<div class="fb-actions">' +
          '<a class="fb-donate" href="' + DONATE + '">Donate</a>' + why +
        '</div>' +
      '</div>' +
    '</div>';

  var me = document.currentScript;
  if (me) { me.insertAdjacentHTML('beforebegin', html); }
  else { document.body.insertAdjacentHTML('afterbegin', html); }

  var bar = document.getElementById('fundbar');

  // Countdown: to the 9 a.m. PT Sep 30 opening, then to the close.
  var OPENS = Date.UTC(2026, 8, 30, 16, 0, 0);   // 2026-09-30 9:00 a.m. PDT
  var CLOSES = Date.UTC(2026, 10, 1, 5, 59, 0);  // 2026-11-01 1:59 a.m. EDT
  var cd = document.getElementById('fb-count');
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function fmt(ms) {
    var t = Math.max(0, Math.floor(ms / 1000));
    return '<b>' + Math.floor(t / 86400) + '</b>d <b>' + pad(Math.floor(t % 86400 / 3600)) + '</b>h <b>' +
      pad(Math.floor(t % 3600 / 60)) + '</b>m <b>' + pad(t % 60) + '</b>s';
  }
  function tick() {
    if (!cd || !document.body.contains(cd)) return;
    var now = Date.now();
    if (now < OPENS) cd.innerHTML = 'Donations open in ' + fmt(OPENS - now);
    else if (now < CLOSES) cd.innerHTML = 'Donations are live! ' + fmt(CLOSES - now) + ' left';
    else { cd.innerHTML = ''; return; }
    setTimeout(tick, 1000);
  }
  tick();
  bar.querySelector('.fb-close').addEventListener('click', function () {
    bar.parentNode.removeChild(bar);
    try { window.localStorage.setItem(KEY, '1'); } catch (e) {}
  });
})();
