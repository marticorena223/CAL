// script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- DataTables Inicialización ---
    // @ts-ignore
    $('#cronologia-table').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"
        }
    });

    // --- Barra de Navegación Pegajosa (Sticky Navbar) ---
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
        updateActiveNav();
    };

    // --- Actualizar link activo en la barra de navegación ---
    const navLinks = document.querySelectorAll('#navbar a');
    const sections = document.querySelectorAll('section');

    function updateActiveNav() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // --- Acordeón ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            
            header.classList.toggle('active');

            if (header.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                accordionContent.style.padding = '20px';
            } else {
                accordionContent.style.maxHeight = '0';
                accordionContent.style.padding = '0 20px';
            }
        });
    });

    // --- Animaciones al hacer Scroll (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Anima cuando el 10% del elemento es visible
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});