'use strict'
const header = document.querySelector('.headerMenu');
const firstBlock = document.querySelector('.welcom__block');
const firstBlockHeight = firstBlock.scrollHeight;

let scrollStarted = 0;
window.addEventListener('scroll', headerScrollHandler);

function headerScrollHandler (){
    const scrollTop = window.pageYOffset;
    console.log(scrollTop)
    if(scrollTop>= firstBlockHeight){
        header.classList.add('headerMenu--fixed')
    }
    else{
        header.classList.remove('headerMenu--fixed')
    }
    scrollStarted=scrollTop;
}
