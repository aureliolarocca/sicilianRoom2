function toggleMenu() {
  const hamMenu = document.querySelector(".ham-menu");
  const hamMenuContent = document.querySelector(".ham-menu-content");
  const spanHamMenu = document.querySelectorAll(".bar");
  let spanHamMenu1 = spanHamMenu[0];
  let spanHamMenu2 = spanHamMenu[1];
  let spanHamMenu3 = spanHamMenu[2];
  spanHamMenu1.classList.toggle("transform1");
  spanHamMenu2.classList.toggle("remove");
  spanHamMenu3.classList.toggle("transform2");
  hamMenuContent.classList.toggle("show");
  const logo = document.querySelector(".logo");
  logo.classList.toggle("active");
}

let currentSlide = 0;
const totalSlides = 3;
const slidesContainer = document.querySelector(".container-slider");
const indicators = document.querySelectorAll(".indicator");
let slideInterval;

// Funzione per cambiare slide automaticamente
function autoSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}

// Funzione per aggiornare la slide
function updateSlide() {
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;
  updateIndicators();
}

// Funzione per aggiornare lo stato degli indicatori
function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

// Event Listener per i bottoni degli indicatori
indicators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    currentSlide = parseInt(e.target.getAttribute("data-slide"));
    updateSlide();
    resetAutoSlide();
  });
});

// Slide automatica ogni 8 secondi
function startAutoSlide() {
  slideInterval = setInterval(autoSlide, 8000);
}

// Funzione per fermare e riavviare l'autoplay
function resetAutoSlide() {
  clearInterval(slideInterval); // Ferma lo slider
  setTimeout(startAutoSlide, 5000); // Riparte dopo 5 secondi
}

// Swipe su mobile
let startX = 0;
let endX = 0;

slidesContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slidesContainer.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

slidesContainer.addEventListener("touchend", () => {
  if (startX > endX + 50) {
    // Swipe a sinistra
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
    resetAutoSlide();
  } else if (startX < endX - 50) {
    // Swipe a destra
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
    resetAutoSlide();
  }
});

// Avvia l'autoplay inizialmente
startAutoSlide();
