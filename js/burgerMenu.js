const burgerBtn = document.querySelector('.bergerMenuBtn');
const burgerMenu = document.querySelector('.burgerNav');
const burgerLinks = document.querySelectorAll('.burgernav__link');
const overlay = document.querySelector('.overlay');

burgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('burgerNav--visible');
    overlay.classList.toggle('active');
});

const btn = document.getElementById('contactBtn')
console.log(btn)
btn.addEventListener('click',function scrollToSection(sectionId) {
    var section = document.querySelector('form');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  })