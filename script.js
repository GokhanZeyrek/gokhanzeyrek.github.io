// 1. Aşağı Kaydırma Animasyonlarını Başlat
AOS.init({
    offset: 120,
    delay: 0,
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
});

// 2. Daktilo (Typewriter) Efekti
const textElement = document.getElementById('typewriter');
// Güncellenmiş Kelime Listesi
const phrases = ["Developer", "Debugger", "AI Developer", "AI Analyst"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 80;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);
