// ----------- MENU TOGGLE -----------
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// ----------- TOGGLE DESCRIPTION -----------
const toggleLinks = document.querySelectorAll('.toggle-description');

toggleLinks.forEach(link => {
  link.addEventListener('click', function() {
    const description = this.previousElementSibling; // <p>
    description.classList.toggle('active'); // changer 'hidden' par 'active'

    if (description.classList.contains('active')) {
      this.textContent = 'Lire moins';
    } else {
      this.textContent = 'Lire la suite';
    }
  });
});




// ----------- FAQ TOGGLE -----------
document.querySelectorAll('.faq-item h3').forEach(h3 =>
  h3.addEventListener('click', () => {
    const p = h3.nextElementSibling;
    p.classList.toggle('open');
  })
);

// ----------- SMOOTH SCROLL -----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ----------- FORM VALIDATION -----------
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nom = this.nom.value.trim();
  const email = this.email.value.trim();
  const telephone = this.telephone.value.trim();
  const message = this.message.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nom || !email || !telephone || !message) {
    alert("Tous les champs sont obligatoires.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Veuillez entrer un email valide.");
    return;
  }

  document.getElementById('formMessage').textContent = "✅ Votre message a été envoyé avec succès !";
  this.reset();
});

// ----------- CAROUSEL CLIENT (BASIC) -----------
const slides = document.querySelectorAll('.carousel .slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

document.getElementById('next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide); // Initialise




