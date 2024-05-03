const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const required = document.getElementById('required')


username.addEventListener('input', e => {
    e.preventDefault();

    const usernameValue = username.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
});

email.addEventListener('input', e => {
    e.preventDefault();

    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(email, 'Email is required');
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }
    else {
        setSuccess(email);
    }
});

phone.addEventListener('input', e => {
    e.preventDefault();

    const phoneValue = phone.value.trim();

    if (phoneValue === '') {
        setError(phone, 'Phone number is required');
    }
    else if (!isDigit(phoneValue)) {
        setError(phone, 'Alphabets are not allowed!');
    }
    else if (phoneValue.length < 10) {
        setError(phone, 'Phone number must be of 10 digits');
    }
    else {
        setSuccess(phone);
    }
});

message.addEventListener('input', e => {
    e.preventDefault();

    const messageValue = message.value.trim();

    if (messageValue === '') {
        setError(message, 'Message is required and must have 30 character');
    }
    else if (messageValue.length < 20) {
        setError(message, `${20 - messageValue.length} characters are required`);
    }
    else if (messageValue.length > 20) {
        setSuccess(message);
    }
});

password.addEventListener('input', e => {
    e.preventDefault();

    const passwordValue = password.value.trim();

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

});

password2.addEventListener('input', e => {
    e.preventDefault();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isDigit(value) {
    return !isNaN(value) && parseInt(value) == value;
}

function checkValidation() {
    if (username.value == '' || email.value == '' || phone.value == '' || message.value == '' || password.value == '' || password2.value == '') {
        setError(required, 'All fields is required');
        return false;
    }

    //password
    else if (password.value !== password2.value) {
        return false;
    }

    else if (password.value.length < 8) {
        return false;
    }

    //email

    else if (!isValidEmail(email.value)) {
        return false;
    }

    //message
    else if (message.value.length < 20) {
        return false;
    }

    //phone no

    else if (!isDigit(phone.value)) {
        return false;
    }
    else if (phone.value.length < 10) {
        return false;
    }

    else {
        return true;
    }
}

