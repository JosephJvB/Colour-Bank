const fs = require('mz/fs')

// const { log } = global.console

const birdPath = `/../../../parrot.live/frames`

findBirds()

function findBirds () {
  fs.readdir(`${__dirname}${birdPath}`, 'utf8')
    .then(fileArr => getBirds(fileArr))
}

function getBirds (arr) {
  arr.forEach(
    f => fs.readFile(`${__dirname}${birdPath}/${f}`, 'utf8')
      .then(b => saveBird(f, b))
  )
}

function saveBird (file, bird) {
  fs.writeFile(`${__dirname}/birds/${file}`, bird, 'utf8')
}
