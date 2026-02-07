const contactForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

let nameValid = false;
let emailValid = false;
let messageValid = false;
  
nameInput.addEventListener('input', () => {
    nameValid = nameInput.value.trim().length >= 2;
    updateStyle(nameInput, nameValid);
});

email.addEventListener('input', () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailValid = emailPattern.test(email.value);
    updateStyle(email, emailValid);
});

message.addEventListener('input', () => {
    messageValid = message.value.trim().length >= 20;
    updateStyle(message, messageValid);
});

function updateStyle(widget, isValid) {
    widget.style.backgroundColor = isValid ? "initial" : "orange";
}

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!nameValid || !emailValid || !messageValid) {
        alert("Please check the orange fields.");
    } else {
        window.location.href = "contact-success.html";
    }
});