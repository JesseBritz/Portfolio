// mobile-menu.js
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const icon = toggle.querySelector('i');
    
    // Toggle menu function
    function toggleMenu() {
        nav.classList.toggle('active');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    }
    
    // Toggle menu on button click
    toggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on a link (mobile only)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside (optional)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && nav.classList.contains('active') && 
            !e.target.closest('nav') && !e.target.closest('.mobile-menu-toggle')) {
            toggleMenu();
        }
    });
});
