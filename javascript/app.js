const burgerMenu = document.getElementById('toggle-menu');
const body = document.body;
// on click of burger menu give nav class active
burgerMenu.addEventListener('click', (e) => {
    let parent = burgerMenu.parentElement;
    parent.classList.toggle('active')
    body.classList.toggle('menu-open')
});

const createAccountButton = document.getElementById('contact-button');
const userEmail = document.getElementById('Users-email');
const userName = document.getElementById('Users-name');
const userMessage = document.getElementById('Users-Message');

const userEmailError = document.getElementById('email-error');
const userNameError = document.getElementById('name-error');
const userMessageError = document.getElementById('message-error');

createAccountButton.addEventListener('click', (e) => {
    e.preventDefault()
    validateName();
    validateEmail();
    validateMessage();
})

function validateName() {
    if(userName.value.length < 2){
        userName.classList.remove('good'); 
        userName.classList.add('error');

        userNameError.classList.add('error');
    } else{
        userName.classList.remove('error'); 
        userName.classList.add('good');

        userNameError.classList.remove('error');
    };
};

function validateEmail() {
    let regx = /^[0-9a-zA-Z!*\$]+@[0-9a-zA-Z]+.[0-9a-zA-Z]+$/;
    if(regx.test(userEmail.value)){
        userEmail.classList.remove('error'); 
        userEmail.classList.add('good');

        userEmailError.classList.remove('error')
    } else{
        userEmail.classList.remove('good'); 
        userEmail.classList.add('error');

        userEmailError.classList.add('error');
    };

};
function validateMessage() {
    if(userMessage.value.length < 30) {
        userMessage.classList.remove('good'); 
        userMessage.classList.add('error');

        userMessageError.classList.add('error')
    } else{
        userMessage.classList.remove('error'); 
        userMessage.classList.add('good');

        userMessageError.classList.remove('error');
    };
}