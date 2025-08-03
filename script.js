// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animations
ScrollReveal().reveal('.hero-left', { 
    origin: 'left', 
    distance: '50px', 
    duration: 1000, 
    delay: 300 
});

ScrollReveal().reveal('.hero-right', { 
    origin: 'right', 
    distance: '50px', 
    duration: 1000, 
    delay: 500 
});

ScrollReveal().reveal('.navbar', { 
    origin: 'top', 
    distance: '20px', 
    duration: 800, 
    delay: 200 
});

ScrollReveal().reveal('.about-img', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.about-content', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    delay: 300
});

ScrollReveal().reveal('.skill-card', {
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    delay: 200,
    interval: 100
});

ScrollReveal().reveal('.project-card', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    delay: 300,
    interval: 200
});

ScrollReveal().reveal('.contact-section', {
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 300,
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});
