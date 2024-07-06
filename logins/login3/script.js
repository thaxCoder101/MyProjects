const logreg_Box = document.querySelector('.logRegBox');
const login_link = document.querySelector('.loginLink');
const Register_link = document.querySelector('.registerLink');

Register_link.addEventListener('click', () =>{
    logreg_Box.classList.add('active');
});
login_link.addEventListener('click', () =>{
    logreg_Box.classList.remove('active');
});