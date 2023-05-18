const iconClose = document.querySelector('.icon-close');
const modalpopup = document.querySelector('.modal');
const login = document.querySelector('.login');

login.addEventListener("click", event => {
    modalpopup.style.display = "flex";
    // document.body.style.overflow = "hidden";
});

iconClose.addEventListener("click", event=>{
    modalpopup.style.display = "none";
    // document.body.style.overflow = "initial";     
});