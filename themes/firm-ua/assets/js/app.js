
// import { homeModal } from "./modals/home-modal.js";
import { postCardModal } from "./modals/post-card-modal.js";
import { sliders } from "./particles/sliders.js";


document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.hero-home')){
        // homeModal();
    } else if(document.querySelectorAll('.post-modal')) {
        postCardModal();
    } else {
        return;
    }
});
if(document.querySelector('.swiper-wrapper')){
    sliders();
}

// ==== menu mobile =======
const menuMobile = document.querySelector('.header-mobile');
const openMenu = document.querySelector('.header__mobile-btn');
const closeMenu = document.querySelector('.menu-close');

if(openMenu && menuMobile && closeMenu){
    openMenu.addEventListener('click', (e) => {
        menuMobile.classList.add('open');
    });
    closeMenu.addEventListener('click', (e) => {
        menuMobile.classList.remove('open');
    });
}


const input = document.querySelector('#file');
const fileName = document.querySelector('.file-name');
if(input){
    input.addEventListener('change', () => {
        fileName.textContent = input.files[0]?.name || 'Файл не выбран';
    });
}

// const faqItems = document.querySelectorAll('.faq__item');
// faqItems.forEach(item => {
//     const button = item.querySelector('.faq__head');
//     const body = item.querySelector('.faq__body');
//     button.addEventListener('click', () => {
//         const isActive = item.classList.contains('active');
//         faqItems.forEach(el => {
//             el.classList.remove('active');
//             const content = el.querySelector('.faq__body');
//             content.style.height = '0px';
//         });
//         if (!isActive) {
//             item.classList.add('active');
//             body.style.height = body.scrollHeight + 'px';
//         }
//     });
// });













