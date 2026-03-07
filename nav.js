// Keyboard navigation for day pages: ← previous day, → next day
(function () {
  var match = window.location.pathname.match(/day-(\d{3})\.html(?:\?.*)?$/);
  if (!match) return;
  var day = parseInt(match[1], 10);
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (e.key === 'ArrowLeft' && day > 1) {
      window.location.href = 'day-' + String(day - 1).padStart(3, '0') + '.html';
    } else if (e.key === 'ArrowRight' && day < 108) {
      window.location.href = 'day-' + String(day + 1).padStart(3, '0') + '.html';
    }
  });
}());
