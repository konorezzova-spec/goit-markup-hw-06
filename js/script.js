const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu-overlay');
const closeMobileMenuButton = document.getElementById('close-mobile-modal');


burgerMenu.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
})
closeMobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
})


const modalButton = document.querySelector('.hero-button');
const modal = document.querySelector('.modal-overlay');
const closeModalButton = document.getElementById('close-modal-overlay');


modalButton.addEventListener('click', function () {
    modal.classList.add('is-open');
});
closeModalButton.addEventListener('click', function () {
    modal.classList.remove('is-open');
});