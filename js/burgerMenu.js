const burgerBtn = document.querySelector('.bergerMenuBtn');
const burgerMenu = document.querySelector('.burgerNav');
const burgerLinks = document.querySelectorAll('.burgernav__link');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('burgerNav--visible');
  overlay.classList.toggle('active');
  body.classList.toggle('body--noscroll');
  
  if (burgerMenu.classList.contains('burgerNav--visible')) {
    document.addEventListener('click', closeMenu);
  } else {
    document.removeEventListener('click', closeMenu);
  }
});

function closeMenu(event) {
  if (!burgerMenu.contains(event.target) && !burgerBtn.contains(event.target)) {
    burgerMenu.classList.remove('burgerNav--visible');
    overlay.classList.remove('active');
    body.classList.remove('body--noscroll');
    document.removeEventListener('click', closeMenu);
  }
}
// закрепп меню 
const btn = document.getElementById('contactBtn')
console.log(btn)
btn.addEventListener('click',function scrollToSection(sectionId) {
    var section = document.querySelector('form');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  })