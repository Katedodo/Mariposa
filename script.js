const deck = document.querySelector('.deck');

// Arrange the proposal as one continuous story: research → differentiator → customer → solution.
['.cover', '.brief-map', '.reference-analysis', '.big-idea', '.persona', '.journey', '.concept', '.scope', '.practical', '.care', '.investment']
  .forEach((selector) => deck.appendChild(document.querySelector(selector)));

const pages = [...document.querySelectorAll('.page')];
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelector('.dots');
let current = 0;

pages.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.setAttribute('aria-label', `Go to page ${index + 1}`);
  dot.addEventListener('click', () => goTo(index));
  dots.appendChild(dot);
});

const dotButtons = [...dots.querySelectorAll('button')];

function updateControls(index) {
  current = index;
  prev.disabled = index === 0;
  next.disabled = index === pages.length - 1;
  dotButtons.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
}

function goTo(index) {
  const safeIndex = Math.max(0, Math.min(index, pages.length - 1));
  pages[safeIndex].scrollIntoView({ behavior: 'smooth', inline: 'start' });
  updateControls(safeIndex);
}

prev.addEventListener('click', () => goTo(current - 1));
next.addEventListener('click', () => goTo(current + 1));

let scrollTimer;
deck.addEventListener('scroll', () => {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => updateControls(Math.round(deck.scrollLeft / window.innerWidth)), 80);
}, { passive: true });

document.querySelectorAll('.phone-tabs button').forEach((button) => {
  button.addEventListener('click', () => {
    const screen = button.dataset.screen;
    document.querySelectorAll('.phone-tabs button').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelectorAll('.site-screen').forEach((panel) => panel.classList.toggle('active', panel.dataset.panel === screen));
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') goTo(current + 1);
  if (event.key === 'ArrowLeft') goTo(current - 1);
});

updateControls(0);
