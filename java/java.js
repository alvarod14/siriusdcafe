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

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const isZoomed = card.classList.contains('zoomed');

    // Quita todas las clases "zoomed"
    document.querySelectorAll('.card').forEach(c => c.classList.remove('zoomed'));

    // Si la tarjeta no estaba ampliada, la amplía
    if (!isZoomed) {
      card.classList.add('zoomed');
    }
  });
});

