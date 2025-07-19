document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Mostrar/ocultar menú al hacer clic en botón
    toggleBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Ocultar menú al hacer clic en un enlace
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});