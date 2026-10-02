// Mobile hamburger nav — shared across all pages.
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const toggle = nav?.querySelector('.nav-toggle');
  const overlay = document.querySelector('.nav-overlay');
  if (!nav || !toggle) return;

  const closeMenu = () => {
    nav.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  overlay?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
});
