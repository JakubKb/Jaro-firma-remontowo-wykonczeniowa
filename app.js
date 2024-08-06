const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel");

let scrollLeft;

// Automatic scroll functionality
let scrollSpeed = 1; // Adjust speed as needed
function autoScroll() {
  carouselContainer.scrollLeft += scrollSpeed;
  if (
    carouselContainer.scrollLeft >=
    carousel.scrollWidth - carouselContainer.clientWidth
  ) {
    carouselContainer.scrollLeft = 0;
  }
  requestAnimationFrame(autoScroll);
}

autoScroll();
