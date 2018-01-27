const fs = require('mz/fs')
const { rainbow } = require('chalk-animation')
// setInterval( x, 70)

birdLoop()

function birdLoop () {
  let idx = 0
  setInterval(() => {
    if (idx === 10) idx = 0
    fs.readFile(`${__dirname}/birds/${idx}.txt`, 'utf8')
      .then(bird => rainbow(bird))
    idx++
  }, 70)
}

// not great but there's something there lol
