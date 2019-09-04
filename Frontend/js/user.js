//GET MODAL / MODAL BUTTONS FOR REQUEST FORMS
const requestBtn = document.getElementById('request-btn'); 
const close = document.querySelector('.close-request');
const request = document.querySelector('.request-modal-content')

// FUNCTIONS / EVENT LISTENER(PARAMS) FOR REQUEST MODAL
const openRequest = () => {
    request.style.display = 'block';
}

const closeRequest = () => {
    request.style.display = 'none';
}

// EVENT LISTENER 
requestBtn.addEventListener('click', openRequest);
close.addEventListener('click', closeRequest);