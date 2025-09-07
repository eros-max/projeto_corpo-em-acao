const slider = new Siema({
perPage: 2,
loop: true,
duration: 200,
}) 

const buttonPrev = document.querySelector('.prev')
const buttonNext = document.querySelector('.next')

buttonPrev.addEventListener("click", () =>  slider.prev())
buttonNext.addEventListener("click", () => slider.next())