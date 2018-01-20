const fs = require('mz/fs')

const { log } = global.console

const wrong = `{"ascii": "ლ(•́•́ლ)","name": "boxing / fight{•̃_•̃","name": "},\n","name": "robot"},`
const right = `{"ascii": "ლ(•́•́ლ)","name": "boxing / fight"},\n\n{"ascii": "{•̃_•̃}","name": "robot"},`

// transform()

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

print()

function print () {
  fs.readFile(`${__dirname}/clean.json`, 'utf8')
    .then(res => JSON.parse(res))
    // .then(t => log(t))
    .then(res => res.find(e => e.name.includes('sad')))
    .then(e => log(e.ascii))
}

// No i had the structure right the first time haha lol. Except there are a few characters that cause errors when I try to JSON.parse.... have deleted them for now but want better fix

// something that im missing on .includes

// also want to try using filter but that breaks it too wtF ok ive had enough here
