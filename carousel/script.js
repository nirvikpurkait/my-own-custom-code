const carousel = document.querySelector('.carousel');
const button = carousel.querySelectorAll('button');
const slide = carousel.querySelector('.slide')

button.forEach(btn => {
  btn.addEventListener('click', () => {
    let allSlide = [...slide.children]
    let activeIndex = [...slide.children].indexOf(slide.querySelector('[data-active = true]'))
    let buttonType = btn.className
    let nextIndex = activeIndex
    
    if (buttonType == 'next') {
      nextIndex = activeIndex + 1
    }
    else nextIndex = activeIndex - 1
    
    if (nextIndex < 0) nextIndex = slide.children.length - 1
    if (nextIndex >= slide.children.length) nextIndex = 0
    
    allSlide[nextIndex].dataset.active = true
    delete allSlide[activeIndex].dataset.active
    
  })
})

// if you don't want automatically cycle through the images comment ou the below portion
// incase of auto slide place the time interval in milisecond(ms) to the 2nd parameter

setInterval(autoSlide, 5000) 

function autoSlide() {
  let allSlide = [...slide.children]
  let activeIndex = [...slide.children].indexOf(slide.querySelector('[data-active = true]'))
  let nextIndex = activeIndex + 1

  if (nextIndex > activeIndex) {
    if (nextIndex < 0) nextIndex = slide.children.length - 1
    if (nextIndex >= slide.children.length) nextIndex = 0

    allSlide[nextIndex].dataset.active = true
    delete allSlide[activeIndex].dataset.active
  }
}