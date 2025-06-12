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

// --- Scroll Animations ---
const revealElements = document.querySelectorAll('.hero-content, .about-card');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// --- Typewriter Effect ---
const typewriterText = "Tech Enthusiast • Web Developer • Cybersecurity Learner";
const subtitleEl = document.querySelector('.hero-subtitle');

let index = 0;
function typeWriter() {
  if (subtitleEl && index < typewriterText.length) {
    subtitleEl.innerHTML += typewriterText.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

window.addEventListener('load', () => {
  if (subtitleEl) subtitleEl.textContent = ""; // clear default text
  typeWriter();
});


// Animated stats counter
const counters = document.querySelectorAll('.stat-number');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
