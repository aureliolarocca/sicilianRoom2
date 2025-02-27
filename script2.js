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
    h2FontSize: "1.3rem",
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

function changeSlideHeader() {
  const slideIndex = slides[currentSlide];

  contentSlide.style.backgroundImage = slideIndex.backgroundImage;
  titleSlide.textContent = slideIndex.p1Text;
  secondTitleSlide.textContent = slideIndex.p2Text;

  titleSlide.style.fontSize = slideIndex.p1FontSize;
  secondTitleSlide.style.fontSize = slideIndex.p2FontSize;
  titleSlide.style.fontWeight = slideIndex.p1fontWeight;

  // Fade out the titles
  titleSlide.style.opacity = 0;
  secondTitleSlide.style.opacity = 0;

  // Wait for the background image change before starting the text animations
  setTimeout(() => {
    titleSlide.style.opacity = 1;
    secondTitleSlide.style.opacity = 1;
  }, 500); // Delay slightly to allow the background to load

  currentSlide = (currentSlide + 1) % slides.length;
}
// Cambia slide ogni 5 secondi
setInterval(changeSlide, 10000);

// Inizializza con la prima slide
changeSlide();
