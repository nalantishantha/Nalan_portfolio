const sideMenu = document.querySelector('#sideMenu');

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

// Portfolio JavaScript utilities for Nalan Tishantha

console.log('Portfolio loaded successfully!');

// Function to display animated typing effect for the main heading
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Function to validate contact form
function validateContactForm(name, email, message) {
    const errors = [];
    
    if (!name || name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!message || message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// Function to calculate years of experience
function calculateExperience() {
    const startYear = 2022; // Nalan's career start year
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
}

// Function to smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Example usage
console.log(`Years of experience: ${calculateExperience()}`);
console.log('Nalan Tishantha Portfolio - Ready!');
