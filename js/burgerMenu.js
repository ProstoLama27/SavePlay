const burgerBtn = document.querySelector('.bergerMenuBtn');
const burgerMenu = document.querySelector('.burgerNav');
const burgerLinks = document.querySelectorAll('.burgernav__link');

burgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('burgerNav--visible');
});