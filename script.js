const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
const finishes = {
  rhodoid: { title: 'Rhodoïd', description: 'La finition classique d’origine.', alt: 'Caisse claire noire avec finition rhodoïd' },
  leather: { title: 'Simili-cuir', description: 'Une texture affirmée, ici en vert profond.', alt: 'Caisse claire avec finition simili-cuir vert profond' },
  pattern: { title: 'Motifs & coloris', description: 'Une expression plus personnelle.', alt: 'Caisse claire blanche ornée de motifs colorés' },
  carbon: { title: 'Sticker carbone', description: 'Une finition à effet carbone.', alt: 'Caisse claire noire avec sticker effet carbone' }
};
document.querySelectorAll('[data-finish]').forEach(button => button.addEventListener('click', () => {
  const key = button.dataset.finish; const finish = finishes[key];
  document.querySelectorAll('[data-finish]').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  const image = document.querySelector('#finish-image'); image.src = `assets/${key}.webp`; image.alt = finish.alt;
  document.querySelector('#finish-title').textContent = finish.title;
  document.querySelector('#finish-description').textContent = finish.description;
}));
