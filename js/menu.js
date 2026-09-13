const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');

        const icon = menuToggle.querySelector('i');
        const aberto = mainNav.classList.contains('open');
        icon.classList.toggle('fa-bars', !aberto);
        icon.classList.toggle('fa-xmark', aberto);
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
        });
    });
}