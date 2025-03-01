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
// Variabili globali
let currentSlide = 0;
let slideDirection = 1; // 1 per avanti, -1 per indietro
const totalSlides = 3;
const slidesContainer = document.querySelector(".container-slider");
const indicators = document.querySelectorAll(".indicator");
let slideInterval;
let isSwiping = false;
let startX = 0;
let endX = 0;

// Inizializza lo slider
function initializeSlider() {
  addIndicatorListeners();
  addSwipeListeners();
  startAutoSlide();
}

// Funzione per cambiare slide automaticamente
function autoSlide() {
  updateCurrentSlide(slideDirection);
  updateSlide();
}

// Funzione per aggiornare l'indice della slide corrente
function updateCurrentSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
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

// Aggiunge Event Listener agli indicatori
function addIndicatorListeners() {
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", (e) => {
      currentSlide = parseInt(e.target.getAttribute("data-slide"));
      updateSlide();
      resetAutoSlide();
    });
  });
}

// Avvia l'autoplay
function startAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 8000);
}

// Ferma e riavvia l'autoplay
function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// Aggiunge Event Listener per il swipe su mobile
function addSwipeListeners() {
  slidesContainer.addEventListener("touchstart", handleTouchStart);
  slidesContainer.addEventListener("touchmove", handleTouchMove);
  slidesContainer.addEventListener("touchend", handleTouchEnd);
}

// Gestisci inizio del touch
function handleTouchStart(event) {
  startX = event.touches[0].clientX;
  isSwiping = true;
  clearInterval(slideInterval); // Ferma l'autoplay durante lo swipe
}

// Gestisci movimento del touch
function handleTouchMove(event) {
  if (isSwiping) {
    endX = event.touches[0].clientX;
  }
}

// Gestisci fine del touch e determina direzione dello swipe
function handleTouchEnd() {
  if (isSwiping) {
    if (startX > endX + 50) {
      // Swipe a sinistra (avanti)
      slideDirection = 1;
      updateCurrentSlide(slideDirection);
    } else if (startX < endX - 50) {
      // Swipe a destra (indietro)
      slideDirection = -1;
      updateCurrentSlide(slideDirection);
    }
    updateSlide();
    isSwiping = false;
    resetAutoSlide();
  }
}

// Avvia l'intero slider
initializeSlider();
