// const checkbox = document.querySelector('.custom-checkbox');
// const checkboxIconBox = document.querySelector('.checkbox-icon-box');

// checkboxIconBox.addEventListener('click', function () { 

// });

const modalButton = document.querySelector('.hero-button');
const modal = document.querySelector('.modal-overlay');
const closeModalButton = document.querySelector('.close-modal');

modalButton.addEventListener('click', function () {
    modal.classList.add('is-open');
});

closeModalButton.addEventListener('click', function () {
    modal.classList.remove('is-open');
});