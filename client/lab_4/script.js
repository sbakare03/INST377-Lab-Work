let slidePosition = 0;
const slides = document.querySelectorAll('carousel_item');
const totalSlides = slides.length;

function updateSlidePosition() {
  for (const slide of slides) {
    console.log(slide);
  }
}

function moveToNextSlide() {
  updateSlidePosition();
  if (slidePosition === totalSlides) {
    slidePosition = 0;
  } else {
    slidePosition+=1;
  }
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
  . querySelector('.carousel_button--next')
  .addEventListener('click', () => {
    moveToNextSlide();
  });

document
  .querySelector('.carousel_button--prev')
  .addEventListener('click', () => {
    moveToPrevSlide();
  });
