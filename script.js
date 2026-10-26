// The contact links use standard phone, Facebook, and email links.
// Replace the Facebook URL and email placeholder in index.html with your real details.
document.querySelectorAll('.contact-card').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('is-pressed');
    window.setTimeout(() => card.classList.remove('is-pressed'), 180);
  });
});
