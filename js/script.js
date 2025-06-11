// Typing Animation
const typingText = document.getElementById('typing-text');
const phrases = ['Web Developer', 'Problem Solver', 'Tech Enthusiast'];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    const text = isDeleting
        ? currentPhrase.substring(0, letterIndex--)
        : currentPhrase.substring(0, letterIndex++);

    typingText.textContent = text;

    if (!isDeleting && letterIndex === currentPhrase.length) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Dark Mode Toggle
const darkModeSwitch = document.getElementById('dark-mode-switch');
darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
});