let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide active';
}

let isPlaying = true;
let pauseButton = document.querySelector('#pause');

pauseButton.onclick = function() {
  if (isPlaying) pauseSlideShow();
  else playSlideShow();
}

function pauseSlideShow() {
  pauseButton.innerHTML = 'Play';
  isPlaying = false;
  clearInterval(slideInterval);
}

function playSlideShow() {
  isPlaying = true;
  slideInterval = setInterval(nextSlide, 2000);
}

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide active';
}

function nextSlide() {
  goToSlide (currentSlide + 1);
}

function previosSlide() {
  goToSlide (currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide active';
}

let next = document.querySelector('#next');
let previous = document.querySelector('#previous');

next.onclick = function() {
  pauseSlideShow();
  nextSlide();
}

previous.onclick = function() {
  pauseSlideShow();
  previosSlide();
}

let controls = document.querySelectorAll('.controls');

for (let i = 0; i < controls.length; i++) {
  controls[i].style.display = 'inline-block';
}