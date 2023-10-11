const submitButton = document.querySelector('button');

const input = document.querySelector('input');

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitButton.addEventListener('click', (e) => {

    const invalidText = document.querySelector('#invalidEmail');

    e.preventDefault();

    if(input.value.match(mailFormat))
    {
        console.log(true);//valid
    }
    else {
        invalidText.style.display = 'flex';
        input.style.color = '#FF6155'
        input.style.borderColor = '#FF6155';
        input.style.backgroundColor = 'rgba(255, 97, 85, 0.15)';
    }

});