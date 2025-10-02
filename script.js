// Add current year in footer:
document.getElementById('year').textContent = new Date().getFullYear();

// When main "Buy Now" opens contact in a new tab:
document.getElementById('buyBtn').addEventListener('click', openContactTab);

function openContactTab(){
  // Open contact.html in a new tab; use full site path if desired.
  const url = 'contact.html';
  window.open(url, '_blank', 'noopener');
}
