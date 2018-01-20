const fs = require('mz/fs')

const { log } = global.console

const wrong = `{"ascii": "ლ(•́•́ლ)","name": "boxing / fight{•̃_•̃","name": "},\n","name": "robot"},`
const right = `{"ascii": "ლ(•́•́ლ)","name": "boxing / fight"},\n\n{"ascii": "{•̃_•̃}","name": "robot"},`

transform()

function transform () {
  fs.readFile(`${__dirname}/raw.txt`, 'utf8')
    .then(s => s.split('\n'))
    .then(arr => arr.toString())
    .then(s => s.replace(/,,/gi, '"} \n{"ascii": "'))
    .then(s => `[\n{"ascii": "${s}"}\n`)
    .then(s => s.replace(/,/gi, '","name": "'))
    .then(s => s.replace(/}/gi, '},\n'))
    .then(s => (s.substring(0, s.length - 3) + '\n]'))
    .then(s => s.replace(wrong, right))
    .then(s => s.replace(`o)\\","`, `o)\\\\","`))
    // .then(s => log(s))
    .then(s => fs.writeFile(`${__dirname}/clean.json`, s, 'utf8'))
}

// print()

function print () {
  fs.readFile(`${__dirname}/clean.json`, 'utf8')
    .then(res => log(res))
}

// OH BOY I HAD THE WRONG IDEA. dont want an array, want one big object, with many keys
// will come back to this soon, big restructure needed

// {
//   ascii: :), name: smile,
//   ascii: :(, name: frown
// }
