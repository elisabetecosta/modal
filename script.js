'use strict';

// Selects the DOM elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const openModalButtons = document.querySelectorAll('.show-modal');


// Attaches event listeners to the "Open Modal" buttons
for (let i = 0; i < openModalButtons.length; i++) {

    openModalButtons[i].addEventListener('click', openModal);
}


// Attaches event listeners to the "Close Modal" button and the overlay
closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


// Attaches an event listener to the document for Escape key press
document.addEventListener('keydown', (e) => {

    // Checks if the Escape key was pressed and the modal is visible
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }    
});


// Opens the Modal
function openModal() {

    // Checks that the required elements exist in the DOM
    if (modal && overlay) {

        // Removes the "hidden" class from the modal and the overlay
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

    } else {

        // Logs an error to the console if the required elements are not found
        console.error('Could not open modal: required elements not found.');
    }
}


// Closes the Modal
function closeModal() {

    // Checks that the required elements exist in the DOM
    if (modal && overlay) {

        // Adds the "hidden" class to the modal and the overlay
        modal.classList.add('hidden');
        overlay.classList.add('hidden');

    } else {

        // Logs an error to the console if the required elements are not found
        console.error('Could not close modal: required elements not found.');
    }
}