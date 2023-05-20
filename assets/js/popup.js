const iconClose = document.querySelector('.icon-close');
const modalpopup = document.querySelector('.modal');
const login = document.querySelector('.login');
const showpass = document.querySelector('.show-pass');
const password = document.querySelector('.password');

login.addEventListener("click", event => {
    modalpopup.style.display = "flex";
    // document.body.style.overflow = "hidden";
});

iconClose.addEventListener("click", event=>{
    modalpopup.style.display = "none";
    // document.body.style.overflow = "initial";     
});

showpass.addEventListener("click", () =>{
    if(password.type=="password")
        password.type="text";
    else
        password.type="password";
});