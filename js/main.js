const slider = new Siema({
perPage: 2,
loop: true,
duration: 500,
}) 

const buttonPrev = document.querySelector('.prev')
const buttonNext = document.querySelector('.next')

buttonPrev.addEventListener('click', () => {
    // Se estiver no começo slide, vai pro final
    if (slider.currentSlide === 0) {
      slider.goTo(3);
    } else {
      slider.prev();
    }
  });
  buttonNext.addEventListener('click', () => {
    // Se estiver no final, vai pro começo
    if (slider.currentSlide >= 3) {
      slider.goTo(0);
    } else {
      slider.next();
    }
  });