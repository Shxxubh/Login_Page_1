const byId=(id)=>{
    return document.getElementById(id);
};
const $signUpButton=byId('signUp');
const $logInButton=byId('logIn');
const $container=byId('main-container');
const $btnLogin=byId('btnLogin');

let email='Email';
let password='Password';

$signUpButton.addEventListener(
    'click',
    ()=>{
        $container.classList.add('right-panel-active');
    },
);

$logInButton.addEventListener(
    'click',
    ()=>{
        $container.classList.remove('right-panel-active');
    },
);

$btnLogin.addEventListener(
    'click',
    ()=>{
        if(email && password){
            window.location.href='Home.html';
        }else{
            window.location.href='index.html';   
        }
    },
);



