// put all the text want to show them one by one in side the array

const textToShow =
  [
    'fron end developer',
    'back end developer',
    'full-stack developer',
    'UI/UX developer'
  ]
const secondText = document.querySelector('.second-text')

secondText.textContent = textToShow[0]
secondText.style.animation = `text 10000ms linear infinite`
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