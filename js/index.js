const submitButton = document.querySelector('#submit-btn');
const input = document.querySelector('input');
const signUpContainer = document.getElementById('newsletter-signup-container');
const successMessage = document.getElementById('success-message');
const emailPlaceholder = document.querySelector('span');
const dismissBtn = document.getElementById('dismiss-btn');
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitButton.addEventListener('click', (e) => {

    const invalidText = document.querySelector('#invalidEmail');

    e.preventDefault();

    if(input.value.match(mailFormat))
    {
        signUpContainer.style.display = "none";
        successMessage.style.display = "flex";
        emailPlaceholder.innerHTML = input.value;

    } else {
        invalidText.style.display = 'flex';
        input.style.color = '#FF6155'
        input.style.borderColor = '#FF6155';
        input.style.backgroundColor = 'rgba(255, 97, 85, 0.15)';
    }

});

input.addEventListener('change', () => {
    const invalidText = document.querySelector('#invalidEmail');

    if(input.value.match(mailFormat)) {

        invalidText.style.display = 'none';
        input.style.color = '#242742';
        input.style.borderColor = 'rgba(25, 24, 43, 0.25)';
        input.style.backgroundColor = '#FFFFFF';

    }

})

dismissBtn.addEventListener('click', () => {

    signUpContainer.style.display = "flex";
    successMessage.style.display = "none";
    input.value = "";

});