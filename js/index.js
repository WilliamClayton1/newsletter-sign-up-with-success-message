const submitButton = document.querySelector('button');

const input = document.querySelector('input');

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitButton.addEventListener('click', (e) => {

    e.preventDefault();

    if(input.value.match(mailFormat))
    {
        console.log(true);
    }
    else {
        console.log(false);
    }

});