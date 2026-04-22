const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Menyuni ko'rsatish
    navbar.classList.toggle('open');     // Gamburgerni 'X' ga aylantirish
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto'; // Skrollni to'xtatish
});