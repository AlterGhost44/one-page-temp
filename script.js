// ===== SECTIONS =====
const sections = document.querySelectorAll('.hero, .contact_form');

function showSection(id) {
  sections.forEach(sec => sec.classList.remove('is-active'));

  const target = document.getElementById(id);
  if (!target) return;

  target.classList.add('is-active');
  target.scrollIntoView({ behavior: 'smooth' });
}

// menu navigation
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.target;
    showSection(target);

    menu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
});

// go to form
document.querySelector('.go-to-form')?.addEventListener('click', e => {
  e.preventDefault();
  showSection('form');
});

// back to home
document.querySelector('.back_home')?.addEventListener('click', e => {
  e.preventDefault();
  showSection('home');
});

// ===== BURGER =====
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger?.addEventListener('click', () => {
  if (window.innerWidth >= 768) return;

  menu.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
});

const phoneButton = document.querySelector('.phone-btn');
phoneButton?.addEventListener('click', () => {
  const phoneNumber = phoneButton.dataset.phone;
  if (phoneButton.classList.contains('is-phone')) return;

  phoneButton.textContent = `Tel: ${phoneNumber}`;
  phoneButton.classList.add('is-phone');

  if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.href = `tel:${phoneNumber}`;
  }
});