const signupForm = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#secret');

let emailValid = false;
let passValid = false;

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
    if (!emailValid || !passValid) {
        alert("Please correct the orange fields.");
    } else {
        window.location.href = "login-success.html";
    }
});