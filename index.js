$(document).ready(function() {
  attachEventListeners();
});

function attachEventListeners() {
  document.addEventListener('click', exploreServices, '.explore-site-btn');
}

function exploreServices() {
  window.location.href = 'fill-property-details.html';
}
