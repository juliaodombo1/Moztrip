const navbar = document.querySelector('.navbar');

if (navbar) {
    const aoScroll = () => {
        if (window.scrollY > 40) {
            navbar.style.background = 'var(--azul-escuro)';
        } else {
            navbar.style.background = 'transparent';
        }
    };
    window.addEventListener('scroll', aoScroll);
    aoScroll();
}

//Modal Registo
const openRegister =
document.getElementById("openRegister");

const registerModal =
document.getElementById("registerModal");

const closeRegister =
document.getElementById("closeRegister");

openRegister.addEventListener("click", () => {
    registerModal.style.display = "flex";
});

closeRegister.addEventListener("click", () => {
    registerModal.style.display = "none";
});

window.addEventListener("click", (e) => {

    if(e.target === registerModal){
        registerModal.style.display = "none";
    }

});

