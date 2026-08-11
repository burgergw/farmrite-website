// Farmrite — shared site behaviour
document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav toggle */
  var header = document.querySelector('.site-header');
  var navToggle = document.querySelector('.nav-toggle');
  if (header && navToggle) {
    navToggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* "More" dropdown */
  var moreWrap = document.querySelector('.nav-more');
  var moreTrigger = document.querySelector('.nav-more__trigger');
  if (moreWrap && moreTrigger) {
    moreTrigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = moreWrap.getAttribute('data-open') === 'true';
      moreWrap.setAttribute('data-open', isOpen ? 'false' : 'true');
      moreTrigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });

    document.addEventListener('click', function (e) {
      if (!moreWrap.contains(e.target)) {
        moreWrap.setAttribute('data-open', 'false');
        moreTrigger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        moreWrap.setAttribute('data-open', 'false');
        moreTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Season progress bar — fills as the visitor scrolls the page */
  var progressFill = document.querySelector('.season-progress__fill');
  if (progressFill) {
    var updateProgress = function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressFill.style.width = Math.min(100, Math.max(0, pct)) + '%';
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  }

  /* Current year in footer */
  var yearEl = document.querySelector('[data-current-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
