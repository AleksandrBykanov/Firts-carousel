function Carousel() {
  this.container = document.querySelector('#carousel');
  this.slidesContainer = this.container.querySelector('.slides');
  this.slides = this.container.querySelectorAll('.slide');
  this.indicatorsContainer = this.container.querySelector('#indicators-container');
  this.indicators = this.indicatorsContainer.querySelectorAll('.indicator');
  this.prevBtn = this.container.querySelector('#btn-prev');
  this.pauseBtn = this.container.querySelector('#btn-pause');
  this.nextBtn = this.container.querySelector('#btn-next');
}

Carousel.prototype = {
  _initProps() {
  this.SLIDES_COUNT = this.slides.length;
  this.CODE_LEFT_ARROW = 'ArrowLeft';
  this.CODE_RIGHT_ARROW = 'ArrowRight';
  this.CODE_SPACE = 'Space';
  this.FA_PAUSE = '<i class="fas fa-pause-circle"></i>';
  this.FA_PLAY = '<i class="fas fa-play-circle"></i>';

  this.currentSlide = 0;
  this.isPlayng = true;
  this.timerID = null;
  this.startPosX = null;
  this.endPosX = null;
  this.interval = 2000;
  },

  _initListeners() {
    this.prevBtn.addEventListener('click', this.prev.bind(this));
    this.pauseBtn.addEventListener('click', this.pausePlay.bind(this));
    this.nextBtn.addEventListener('click', this.next.bind(this));
    this.indicatorsContainer.addEventListener('click', this._indicate.bind(this));
    document.addEventListener('keydown', this._pressKey.bind(this));
  },

  _gotoNth(n) {
    this.slides[this.currentSlide].classList.toggle('active');
    this.indicators[this.currentSlide].classList.toggle('active');
    this.currentSlide = (n + this.SLIDES_COUNT) % this.SLIDES_COUNT;
    this.indicators[this.currentSlide].classList.toggle('active');
    this.slides[this.currentSlide].classList.toggle('active');
  },

  _gotoPrev() {
    this._gotoNth(this.currentSlide - 1);
  },

  _gotoNext() {
    this._gotoNth(this.currentSlide + 1);

  },

  _indicate(e) {
    const target = e.target;

    if (target && target.classList.contains('indicator')) {
      this.pause();
      this._gotoNth(+target.dataset.slideTo);
    }
  },

  _pressKey(e) {
    if (e.code === this.CODE_LEFT_ARROW) this.prev();
    if (e.code === this.CODE_RIGHT_ARROW) this.next();
    if (e.code === this.CODE_SPACE) this.pausePlay(); 
  },

  pause() {
    this.pauseBtn.innerHTML = this.FA_PLAY;
    this.isPlayng = false;
    clearInterval(this.timerID);
  },

  play() {
    this.pauseBtn.innerHTML = this.FA_PAUSE;
    this.isPlayng = true;
    this.timerID = setInterval(() => this._gotoNext(), this.interval);
  },

  pausePlay() {
    this.isPlayng ? this.pause() : this.play();
  },

  prev() {
    this._gotoPrev();
    this.pause();
  },

  next() {
    this._gotoNext();
    this.pause();
  },

  init() {
    this._initProps();
    this._initListeners();
    this.timerID = setInterval(() => this._gotoNext(), this.interval);
  },
};

Carousel.prototype.constructor = Carousel;