
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-pswd");
const errorMessage = document.querySelector("#error-msg");

const pswdLowercase = document.querySelector("#letter");
const pswdCapital = document.querySelector("#capital");
const pswdNumber = document.querySelector("#number");
const pswdSpecialChar = document.querySelector("#special-char");
const pswdLength = document.querySelector("#length");

const createAccount = document.querySelector("#create-account");
const form = document.querySelector("form");

// firstName.addEventListener('invalid', () => {
//     firstName.setCustomValidity("Please enter your first name.");
// });

// lastName.addEventListener('invalid', () => {
//     lastName.setCustomValidity("Please enter your last name.");
// });

// email.addEventListener('invalid', () => {
//     email.setCustomValidity("Please enter a valid email.");
// });

// phoneNumber.addEventListener('invalid', () => {
//     phoneNumber.setCustomValidity("Please enter a valid phone number.");
// });

// password.addEventListener('invalid', () => {
//     password.setCustomValidity("Please enter a valid password.");
// });

// confirmPassword.addEventListener('invalid', () => {
//     confirmPassword.setCustomValidity("Please confirm password.");
// });

firstName.addEventListener('focus', addInvalidClasses(firstName));

lastName.addEventListener('focus', addInvalidClasses(lastName));

email.addEventListener('focus', addInvalidClasses(email));

phoneNumber.addEventListener('focus', addInvalidClasses(phoneNumber));

password.addEventListener('focus', addInvalidClasses(password));

password.addEventListener('blur', confirmPasswordMatch);

confirmPassword.addEventListener('blur', confirmPasswordMatch);

password.addEventListener('keyup', () => {
    let lowerCaseLetters = /[a-z]/g;
    if(password.value.match(lowerCaseLetters)) {
        pswdLowercase.classList.remove('pswd-invalid');
        pswdLowercase.classList.add('pswd-valid');
    } else {
        pswdLowercase.classList.add('pswd-invalid');
        pswdLowercase.classList.remove('pswd-valid');
    }

    let upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {
        pswdCapital.classList.remove('pswd-invalid');
        pswdCapital.classList.add('pswd-valid');
    } else {
        pswdCapital.classList.add('pswd-invalid');
        pswdCapital.classList.remove('pswd-valid');
    }

    let specialChars = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
    if(password.value.match(specialChars)) {
        pswdSpecialChar.classList.remove('pswd-invalid');
        pswdSpecialChar.classList.add('pswd-valid');
    } else {
        pswdSpecialChar.classList.add('pswd-invalid');
        pswdSpecialChar.classList.remove('pswd-valid');
    }

    let numbers = /[0-9]/g;
    if(password.value.match(numbers)) {
        pswdNumber.classList.remove('pswd-invalid');
        pswdNumber.classList.add('pswd-valid');
    } else {
        pswdNumber.classList.add('pswd-invalid');
        pswdNumber.classList.remove('pswd-valid');
    }

    if(password.value.length >= 8) {
        pswdLength.classList.remove('pswd-invalid');
        pswdLength.classList.add('pswd-valid');
    } else {
        pswdLength.classList.add('pswd-invalid');
        pswdLength.classList.remove('pswd-valid');
    }
});

// form.addEventListener('submit', (event) => {

//     if (!firstName.validity.valid && !lastName.validity.valid && !email.validity.valid && !phoneNumber.validity.valid && !password.validity.valid && !confirmPassword.validity.valid) {
//         event.preventDefault();
//     }
// });

function addInvalidClasses(element) {

    element.addEventListener('focusout', () => {
        element.classList.add('invalid');
    });
}

function confirmPasswordMatch() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('invalid');
        errorMessage.classList.add('no-match');
    } else {
        confirmPassword.classList.remove('invalid');
        errorMessage.classList.remove('no-match');
    }
}