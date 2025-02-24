function toggleMenu() {
  const menu = document.querySelector(".hamburger-menu");
  const menuContent = document.querySelector(".menu-content");
  menu.classList.toggle("active");
  menuContent.classList.toggle("show");
  const logo = document.querySelector(".logo");
  logo.classList.toggle("active");
}
const header = document.querySelector(".container-foto-header");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const ctaButton = document.querySelector(".cta-button");

const slides = [
  {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(Fotoheader1.jpg)",
    h1Text: "Dove l'Etna incontra il mare",
    h2Text: "Vivi Catania",
    buttonText: "Prenota la tua esperienza",
    buttonLink: "#prenota",
    h1FontSize: "2.5rem",
    h2FontSize: "1.5rem",
    h1fontWeight: "700",
  },
  {
    backgroundImage:
      'linear-gradient(rgba(15, 15, 15, 0.5), rgba(0, 0, 0, 0.5)), url("Fotoheader2.jpg")',
    h1Text: "Esplora la Citta' del sole",
    h2Text: "La nostra casa in pieno centro.",
    buttonText: "Scopri Sicilian Room 1",
    buttonLink: "#scopri",
    h1FontSize: "2.2rem",
    h2FontSize: "1.1rem",
    h1fontWeight: "500",
  },
  {
    backgroundImage: 'url("Fotoheader3.jpg")',
    h1Text: "Avventura e relax",
    h2Text: "Guarda i punti d'interesse vicino a noi.",
    buttonText: "Punti d'interesse",
    buttonLink: "#prenota",
    h1FontSize: "2rem",
    h2FontSize: "1.1rem",
    h1fontWeight: "500",
  },
];

let currentSlide = 0;

function changeSlide() {
  const slide = slides[currentSlide];

  // Cambia l'immagine di sfondo
  header.style.backgroundImage = slide.backgroundImage;

  // Cambia i testi
  h1.style.fontSize = slide.h1FontSize;
  h2.style.fontSize = slide.h2FontSize;
  h1.style.fontWeight = slide.h1fontWeight;

  h1.textContent = slide.h1Text;
  h2.textContent = slide.h2Text;
  ctaButton.textContent = slide.buttonText;
  ctaButton.setAttribute("href", slide.buttonLink);

  // Resetta l'animazione per ogni cambio
  h1.style.animation = "none";
  h2.style.animation = "none";
  ctaButton.style.animation = "none";

  setTimeout(() => {
    h1.style.animation = "fadeIn 1.5s ease-out forwards";
    h2.style.animation = "fadeIn 1.5s ease-out forwards";
    ctaButton.style.animation = "fadeIn 1.5s ease-out forwards";
  }, 100);

  // Incrementa l'indice della slide
  currentSlide = (currentSlide + 1) % slides.length;
}

// Cambia slide ogni 5 secondi
setInterval(changeSlide, 8000);

// Inizializza con la prima slide
changeSlide();
