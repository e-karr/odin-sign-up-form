const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");

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