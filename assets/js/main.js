import SwipeCarousel from './carousel-swipe.js';

const slider = new SwipeCarousel({
  containerID: '#mycarousel', 
  slideID: '.item',
  interval: 4000,
  isPlaying: true,
});

slider.init();






