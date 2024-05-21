// script.js

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.remove('navbar-dark-theme');
        navbar.classList.add('navbar-light-theme');
    } else {
        navbar.classList.remove('navbar-light-theme');
        navbar.classList.add('navbar-dark-theme');
    }
});

// Initialize with dark theme
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.add('navbar-dark-theme');
});
