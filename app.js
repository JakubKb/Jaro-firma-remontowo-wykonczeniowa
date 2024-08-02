let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const buttons = document.querySelectorAll(".carousel-buttons button");

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
    img.classList.toggle("fade", i === index);
  });
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active-button", i === index);
  });
  currentIndex = index;
}

function nextImage() {
  const nextIndex = (currentIndex + 1) % images.length;
  showImage(nextIndex);
}

setInterval(nextImage, 5000);
