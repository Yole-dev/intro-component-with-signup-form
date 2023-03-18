`use strict`

const firstName = document.querySelector('#firstName');
const firstNameText = document.querySelector('.firstName');

const lastName = document.querySelector('#lastName');
const lastNameText = document.querySelector('.lastName');

const emailAddress = document.querySelector('#emailAddress');
const emailAddressText = document.querySelector('.emailAddress');

const password = document.querySelector('password');
const passwordText = document.querySelector('.password');

const claimBtn = document.querySelector('.claimBtn');

const input = [firstName, lastName, emailAddress, password];

claimBtn.addEventListener('click', function() {
    input.forEach(function(inputEl, i) {
        if(inputEl === '') {
            inputEl.style.borderColor = 'hsl(0, 100%, 74%)';
            firstNameText.innerHTML = `First Name cannot be empty`;
            lastNameText.innerHTML = `Last Name cannot be empty`;
            emailAddressText.innerHTML = `Looks like this is not an email`;
            passwordText.innerHTML = `Password cannot be empty`;
        }
    }); 
    
    // console.log('clicked');
});

