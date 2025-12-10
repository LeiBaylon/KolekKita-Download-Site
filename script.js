// ===========================
// Navigation Functionality
// ===========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// Smooth Scrolling
// ===========================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Active Navigation on Scroll
// ===========================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Scroll Animation Observer
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-card, .feature-card, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===========================
// Navbar Background on Scroll
// ===========================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.transform = 'translateY(0)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
});

// ===========================
// Contact Form Handling
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (name && email && message) {
                if (window.showModal) {
                    window.showModal('Thank you for your message! We will get back to you soon.');
                } else {
                    alert('Thank you for your message! We will get back to you soon.');
                }
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});

// ===========================
// Custom Modal Handler
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('customModal');
    const modalMessage = document.getElementById('modalMessage');
    const modalClose = document.getElementById('modalClose');
    const modalOkBtn = document.getElementById('modalOkBtn');

    if (!modal || !modalMessage) {
        console.error('Modal elements not found');
        return;
    }

    window.showModal = function(message) {
        modalMessage.textContent = message;
        modal.classList.add('show');
    };

    function closeModal() {
        modal.classList.remove('show');
    }

    modalClose.addEventListener('click', closeModal);
    modalOkBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// ===========================
// CTA Button Click Handler
// ===========================

const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', () => {
    const appSection = document.querySelector('#app');
    const offsetTop = appSection.offsetTop - 100;
    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// ===========================
// Download Button Handlers
// ===========================

const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('ios')) {
            showModal('iOS version coming soon!');
        }
    });
});

// ===========================
// Login Button Handler
// ===========================

const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', () => {
    alert('Login functionality will be integrated with the KolekKita system.');
});

// ===========================
// Parallax Effect for Hero Shapes
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.05;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===========================
// Prevent FOUC (Flash of Unstyled Content)
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===========================
// Responsive Navigation Height Fix
// ===========================

function setNavHeight() {
    const nav = document.querySelector('.navbar');
    document.documentElement.style.setProperty('--nav-height', `${nav.offsetHeight}px`);
}

window.addEventListener('load', setNavHeight);
window.addEventListener('resize', setNavHeight);

console.log('KolekKita website initialized successfully! 🌱');