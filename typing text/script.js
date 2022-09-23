// put all the text want to show them one by one in side the array
const textToShow =
  [
    'Lorem ipsum dolor sit,',
    'amet consectetur adipisicing elit.',
    'Voluptatum, odio',
    'soluta expedita cum repellendus praesentium!'
  ]

const secondText = document.querySelector('.second-text')

secondText.textContent = textToShow[0]
secondText.style.animationTimingFunction = `steps(${textToShow[0].length})`

setInterval(showText, 10000);

function showText() {
  let currentText = secondText.textContent
  let currentTextIndex = textToShow.indexOf(currentText)
  
  let nextIndex = currentTextIndex + 1
  
  if (nextIndex >= textToShow.length) nextIndex = 0
  
  let nextIndexLength = textToShow[nextIndex].length

  secondText.textContent = textToShow[nextIndex]
  secondText.style.animationTimingFunction = `steps(${nextIndexLength})`
}