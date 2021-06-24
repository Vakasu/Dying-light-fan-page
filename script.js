let modal = document.querySelector('.modalw');
let close = document.querySelector('.close');
let signUp = document.querySelector('.signup');
let body = document.querySelector('body');

signUp.addEventListener('click', function() {
    modal.classList.remove('hide');
    modal.classList.add('modal');
});

close.addEventListener('click', function() {
    modal.classList.remove('modal');
    modal.classList.add('hide');
});