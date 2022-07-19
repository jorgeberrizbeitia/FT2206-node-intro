const cows = require('cows');

// Math.random()

// cowArr 0 - cowArr.length
function randomCoWFunction() {
  const cowArr = cows()
  let randomNum = Math.random() * cowArr.length
  let randomIndex = Math.floor(randomNum)
  return cowArr[randomIndex]
}

module.exports = randomCoWFunction