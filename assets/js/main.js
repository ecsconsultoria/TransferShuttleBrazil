// Transfer & Shuttle Brazil - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚐 Transfer & Shuttle Brazil - Initialized');
    
    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                if (navMenu) navMenu.classList.remove('active');
            }
        });
    });

    // Booking Form Submission
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                serviceType: document.querySelector('[name="service"]')?.value,
                pickupDate: document.querySelector('[name="pickup-date"]')?.value,
                pickupTime: document.querySelector('[name="pickup-time"]')?.value,
                pickupLocation: document.querySelector('[name="pickup-location"]')?.value,
                dropoffLocation: document.querySelector('[name="dropoff-location"]')?.value,
                passengers: document.querySelector('[name="passengers"]')?.value
            };

            // Validate form
            if (!formData.pickupDate || !formData.pickupLocation || !formData.dropoffLocation) {
                alert('Por favor, preencha todos os campos obrigatórios');
                return;
            }

            console.log('Booking Data:', formData);
            alert('Obrigado! Você será contactado em breve para confirmar a reserva.');
            this.reset();
        });
    }

    // Counter Animation for Stats Section
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    const animateStats = () => {
        if (statsAnimated) return;
        
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + '+';
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 30);
        });
        
        statsAnimated = true;
    };

    // Trigger stats animation when section is in view
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(statsSection);
    }

    // Lazy Load Images
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }

    // Accessibility: Focus Management
    document.querySelectorAll('button, a, input, select').forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        element.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });

    // Analytics Event Tracking (placeholder)
    window.trackEvent = function(eventName, eventData = {}) {
        console.log('Event tracked:', eventName, eventData);
        // Add your analytics code here (Google Analytics, etc)
    };

    // Log initial state
    console.log('✅ All components initialized successfully');
});

// Utility Functions

function formatDate(date) {
    return date.toLocaleDateString('pt-BR');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

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

// Service Worker Registration (Optional for PWA)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('Service Worker not available:', err);
    });
}
