const hamburgerIcon=document.querySelector('.hamburger-icon');
const hamburgerMenu=document.querySelector('.hamburger-menu');
const crossIcon=document.querySelector('.cross-icon');
const showMoreMenu=document.querySelector('#show-more-menu');
const showProductMenu=document.querySelector('#show-product-menu');

hamburgerIcon.addEventListener('click',function(){
    hamburgerMenu.classList.add('show-hamburger-menu');
});
crossIcon.addEventListener('click',function(){
    hamburgerMenu.classList.remove('show-hamburger-menu')
})