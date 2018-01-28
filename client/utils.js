import request from 'superagent'
import h from 'react-hyperscript'
import { Fragment as F } from 'react'

const { log } = global.console

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

// function passed to handleSubmit, logs the values entered
async function sub (props) {
  const clear = await props.clearFields
  await log(props.form)
  await clear('wiz1Info')
}

// function that mad props are injected into. rendered the form field
const renderField = (props) => {
  // log(props)
  const { label, meta, input } = props
  const { touched, error } = meta
  return (
    h(F, [
      h('label', label),
      h('input', input),
      error && touched && h('span', error)
    ])
  )
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

module.exports = { reqCount, addCount, validate, renderField, sub }
