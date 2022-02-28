let slidePosition = 0;
const slides = document.querySelectorAll('.carousel__item');
const totalSlides = slides.length;

function updateSlidePosition() {
  for (const slide of slides) {
    console.log(slide);
    slide.classList.add('carousel__item--hidden');
    slide.classList.remove('carousel__item--visible');
  }
  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides) {
    slidePosition = 0;
  } else {
    slidePosition += 1;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  updateSlidePosition();
  if (slidePosition === 0) {
    slidePosition = 0;
  } else {
    slidePosition--;
  }
}

document
  .querySelector('#carousel__button--next')
  .addEventListener('click', () => {
    console.log('clicked next');
    moveToNextSlide();
  });

document
  .querySelector('#carousel__button--prev')
  .addEventListener('click', () => {
    console.log('clicked prev');
    moveToPrevSlide();
  });
