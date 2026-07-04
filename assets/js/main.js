document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.has-dropdown > a.nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 1080) {
        e.preventDefault();
        var li = link.parentElement;
        var wasOpen = li.classList.contains('is-open');
        document.querySelectorAll('.has-dropdown.is-open').forEach(function (el) { el.classList.remove('is-open'); });
        if (!wasOpen) li.classList.add('is-open');
      }
    });
  });

  document.querySelectorAll('.has-dropdown').forEach(function (li) {
    li.addEventListener('mouseenter', function () { if (window.innerWidth > 1080) li.classList.add('is-open'); });
    li.addEventListener('mouseleave', function () { if (window.innerWidth > 1080) li.classList.remove('is-open'); });
  });

  document.addEventListener('click', function (e) {
    if (header && header.classList.contains('is-open') && !header.contains(e.target)) {
      header.classList.remove('is-open');
    }
  });
});
