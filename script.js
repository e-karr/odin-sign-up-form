const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-pswd");
const errorMessage = document.querySelector(".error-msg");

firstName.addEventListener('invalid', () => {
    firstName.setCustomValidity('Please enter your first name.');
});

lastName.addEventListener('invalid', () => {
    lastName.setCustomValidity('Please enter your last name.');
});

email.addEventListener('invalid', () => {
    email.setCustomValidity('Please enter a valid email.');
});

phoneNumber.addEventListener('invalid', () => {
    phoneNumber.setCustomValidity('Please enter a valid phone number.');
});

confirmPassword.addEventListener('blur', () => {
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMessage.classList.add('no-match');
    } else {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        errorMessage.classList.remove('no-match');
    }
});