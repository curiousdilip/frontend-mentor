const form = document.querySelector('.form');

const generateError = input => {
    const validity = input.validity;

    if (validity.valid) return null;

    if (validity.valueMissing) return 'Please fill out this field'

    if (validity.patternMismatch) return 'Please provide a valid email address'
}

const displayError = (input, message, error) => {
    input.classList.add('invalid-input');
    if (!message) {
        message = document.createElement('span');
        message.classList.add('form-error');
        input.parentNode.insertBefore(message, input.nextElementSibling);
    }
    message.textContent = error;
    message.id = '#error-message';
    input.setAttribute('aria-describedby', 'error-message');
}

const removeError = (input, message) => {
    input.classList.remove('invalid-input');
    input.removeAttribute('aria-describedby');
    input.form.removeChild(message);
}

const validate = () => {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector('.form-input');
    let message = form.querySelector('.form-error');
    const error = generateError(input);
    if (error) {
        displayError(input, message, error);
        return;
    } else {
        removeError(input, message);
    }
}

form.addEventListener('submit', validate);