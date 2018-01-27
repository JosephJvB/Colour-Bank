const chalk = require('chalk')
const { rainbow } = require('chalk-animation')

const { log } = global.console

// tetrachromacy()

function tetrachromacy () {
  log(chalk.red.bgWhite('i believe'))
  log(chalk.blue.bgYellow('i see'))
  log(chalk.yellow.bgBlue('the four'))
  log(chalk.white.bgRed('colours'))
}
// const col = ['red', 'blue', 'yellow']
// col.forEach(c => log(chalk[c]))

// cookiecutter()

function cookiecutter () {
  log(`
  CPU: ${chalk.red('90%')}
  RAM: ${chalk.green('40%')}
  DISK: ${chalk.yellow('70%')}
  `)
}

// keyss()

function keyss () {
  log(chalk.keyword('orange').underline('this text is orange'))
}

darkside()

function darkside () {
  rainbow('joseph and his amazing technicolour dreamcoat')
}
