const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.getElementById('overlay');

// Funktsiyani alohida yozamiz (qayta ishlatish oson bo'ladi)
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Skrollni to'xtatish
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

hamburger.addEventListener('click', toggleMenu);

// Overlay (bo'sh joy) bosilganda ham menyu yopilsin
overlay.addEventListener('click', toggleMenu);

// Linklar bosilganda yopilishi
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', toggleMenu));