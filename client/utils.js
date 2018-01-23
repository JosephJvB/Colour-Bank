import request from 'superagent'

const url = 'http://localhost:3000/'

function reqCount (col) {
  return request
    .get(`${url}api/v1/${col}`)
}

function addCount (col, count) {
  return request
    .put(`${url}api/v1/${col}/${count}`)
}

function validate (vals) {
  // global.console.log(vals)
  const errors = { }
  if (!vals.wiz1Info) {
    // global.console.log('oi')
    errors.wiz1Info = 'dingbat'
  }
  return errors
}

// validate is getting called twice on load but never again, no matter interaction with input or submit
// actually it gets called if the user inputs text, and then leaves it empty
// need to do it on blur too && if user tries to input no text
// so validate not being run on submit

// where does errors object go lol

// function switcher (rgba) {
//   switch (rgba) {
//     case 'rgba(236, 39, 39, 0.6)': return 'red'
//     case 'rgba(7, 0, 234, 0.6)': return 'blue'
//     case 'gba(251, 255, 35, 0.6)': return 'yellow'
//     case 'rgba(40, 166, 1, 0.6)': return 'green'
//   }
// }

module.exports = { reqCount, addCount, validate }
