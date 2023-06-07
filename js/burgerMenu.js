const burgerBtn = document.querySelector('.bergerMenuBtn');
const burgerMenu = document.querySelector('.burgerNav');
const burgerLinks = document.querySelectorAll('.burgernav__link');

burgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('burgerNav--visible');
});

const btn = document.getElementById('contactBtn')
console.log(btn)
btn.addEventListener('click',function scrollToSection(sectionId) {
    var section = document.querySelector('form');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  })