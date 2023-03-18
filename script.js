`use strict`

const form = document.querySelector('#form');

const firstName = document.querySelector('#firstName');
const firstNameError = document.querySelector('.firstName');

const lastName = document.querySelector('#lastName');
const lastNameError = document.querySelector('.lastName');

const emailAddress = document.querySelector('#emailAddress');
const emailAddressError = document.querySelector('.emailAddress');

const password = document.querySelector('#password');
const passwordError = document.querySelector('.password');

const inputControl = document.querySelector('.input-control');

const claimBtn = document.querySelector('.claimBtn');

const input = [firstName, lastName, emailAddress, password];




//validation
form.addEventListener('submit', function(e) {
    e.preventDefault();

    validateInputs();
});


const isEmailValid = function(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = function() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = emailAddress.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue == '') {
        firstName.style.borderColor = 'hsl(0, 100%, 74%)';
        firstNameError.innerHTML = `First Name cannot be empty`;
    }

    if(lastNameValue == '') {
        lastName.style.borderColor = 'hsl(0, 100%, 74%)';
        lastNameError.innerHTML = `Last Name cannot be empty`;
    }

    if(emailValue == '') {
        emailAddress.style.borderColor = 'hsl(0, 100%, 74%)';
        emailAddressError.innerHTML = `Looks like this is not an email`;
    } else if(!isEmailValid(emailValue)) {
        emailAddressError.innerHTML = `Looks like this is not an email`;
    }

    if(passwordValue == '') {
        password.style.borderColor = 'hsl(0, 100%, 74%)';
        passwordError.innerHTML = `Password cannot be empty`;
    } else if(passwordValue.length < 8) {
        passwordError.innerHTML = `Password must be at least 8 characters long.`;
    }
};


//validation with forEach concept
// claimBtn.addEventListener('click', function(){

//     input.forEach(function(inputEl) {
//         if(inputEl[i] === '') {
//             inputEl[i].style.borderColor = 'hsl(0, 100%, 74%)';
//         }
//     })
// })