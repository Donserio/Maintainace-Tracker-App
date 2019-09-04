//GET MODAL / MODAL BUTTONS / FORMS
const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn'); 
const closeBtn = document.querySelector('.closeBtn');

const changeForm = document.getElementById('Login');
const createAcc = document.getElementById('signUp');
const swap = document.getElementById('swap');
const backToSignUp = document.getElementById('backToSignUp');


// FUNCTIONS TO BE  CALLED IN EVENT LISTENER(PARAMS)

const openModal = () => {
    modal.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none';
}  

const changeToSignin = () => {
    createAcc.style.display = 'none';
    changeForm.style.display = 'block';
}

const switchToSignUp = () => {
    createAcc.style.display = 'block';
    changeForm.style.display = 'none';
}


// EVENT LISTENER 
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
        if(e.target ===  modal)
        {
         modal.style.display = 'none';
        }
    });

swap.addEventListener('click', changeToSignin);
backToSignUp.addEventListener('click',switchToSignUp);
