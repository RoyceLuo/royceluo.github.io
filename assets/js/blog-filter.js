// Powers the Blog page's search box, clickable tags, and year archive.
// All filtering happens client-side against data attributes rendered
// by Jekyll at build time — no backend needed.
document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('blog-search-input');
  var list = document.getElementById('post-list');
  if (!input || !list) return;

  var cards = list.querySelectorAll('.post-card');
  var noResults = document.getElementById('no-results');
  var yearLinks = document.querySelectorAll('.year-link');
  var activeYear = null;

  function applyFilter() {
    var query = (input.value || '').trim().toLowerCase();
    var visibleCount = 0;

    cards.forEach(function (card) {
      var matchesSearch = !query || card.dataset.search.indexOf(query) !== -1;
      var matchesYear = !activeYear || card.dataset.year === activeYear;
      var visible = matchesSearch && matchesYear;
      card.hidden = !visible;
      if (visible) visibleCount++;
    });

    if (noResults) noResults.hidden = visibleCount !== 0;
  }

  input.addEventListener('input', applyFilter);

  yearLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var year = link.dataset.year;
      activeYear = activeYear === year ? null : year;
      yearLinks.forEach(function (l) { l.classList.remove('active'); });
      if (activeYear) link.classList.add('active');
      applyFilter();
    });
  });

  document.querySelectorAll('.post-tag').forEach(function (tag) {
    tag.addEventListener('click', function () {
      input.value = tag.dataset.tag;
      applyFilter();
      input.focus();
    });
  });
});
