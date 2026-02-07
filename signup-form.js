const signupForm = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const phone = document.querySelector('#phone-number');
const email = document.querySelector('#email');
const password = document.querySelector('#secret');

let firstValid = false;
let lastValid = false;
let phoneValid = false;
let emailValid = false;
let passValid = false;

firstName.addEventListener('input', () => {
    firstValid = firstName.value.trim().length > 2;
    updateStyle(firstName, firstValid);
});

lastName.addEventListener('input', () => {
    lastValid = lastName.value.trim().length > 2;
    updateStyle(lastName, lastValid);
});

phone.addEventListener('input', () => {
    const phoneValue = phone.value.split('-').join('');
    if (!isNaN(phoneValue) && phoneValue.length === 10) {
        phoneValid = true;
    } else {
        phoneValid = false;
    }
    updateStyle(phone, phoneValid);
});

email.addEventListener('input', () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailValid = emailPattern.test(email.value);
    updateStyle(email, emailValid);
});

password.addEventListener('input', () => {
    passValid = password.value.length >= 12 && password.value.length <= 12;
    updateStyle(password, passValid);
});

function updateStyle(element, isValid) {
    element.style.backgroundColor = isValid ? "initial" : "orange";
}

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!firstValid || !lastValid || !phoneValid || !emailValid || !passValid) {
        alert("Please correct the orange fields.");
    } else {
        window.location.href = "signup-success.html";
    }
});