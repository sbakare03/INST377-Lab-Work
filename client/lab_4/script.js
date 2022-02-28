const slidePosition = 0;
const slides = document.querySelectorAll('carousel_item');
const totalSlides = slides.length;

document.
querySelector('carousel_button--next')
.addEventListener("click", function() => {
    moveToNextSlide();
   });

  document.
  querySelector('carousel_button--prev')
  .addEventListener("click", function() => {
      moveToPrevSlide();
    });

function updateSlidePosition() {
    for (let slide of slides) {
        console.log(slide);
    }
}


function moveToNextSlide() {
    updateSlidePosition();
    if(slidePosition = totalSlides) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
}

function moveToPrevSlide() {
    updateSlidePosition();
    if(slidePosition = 0) {
        slidePosition = 0;
    } else {
        slidePosition--;
    }
}