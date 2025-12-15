// ===================================
// Portfolio Website JavaScript
// Ming-Hong Lin
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initMobileMenu();
    initSmoothScrolling();
    initActiveNavigation();
    initScrollTopButton();
    initScrollAnimations();
});

// ===================================
// Mobile Menu Toggle
// ===================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger bars
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scrolling for hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Active Navigation Highlighting
// ===================================
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Call once on load
}

// ===================================
// Scroll to Top Button
// ===================================
function initScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        // Scroll to top when button is clicked
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===================================
// Scroll Animations (Fade-in on Scroll)
// ===================================
function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll(
        '.education-item, .publication-item, .project-card, .skill-category, .experience-item, .contact-item'
    );

    animatedElements.forEach((element, index) => {
        // Initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.transitionDelay = `${index * 0.1}s`;

        // Observe element
        observer.observe(element);
    });
}

// ===================================
// Navbar Background on Scroll
// ===================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.backgroundColor = 'var(--primary-black)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ===================================
// Download CV Analytics (Optional)
// ===================================
const downloadButtons = document.querySelectorAll('a[download]');
downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('CV downloaded');
        // You can add analytics tracking here if needed
    });
});

// ===================================
// External Links (Open in New Tab)
// ===================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add rel="noopener noreferrer" for security
        if (!this.hasAttribute('rel')) {
            this.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// ===================================
// Performance Optimization
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(function() {
    // Any heavy scroll calculations can go here
}, 100);

window.addEventListener('scroll', debouncedScroll);
