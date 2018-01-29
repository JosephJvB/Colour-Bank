import request from 'superagent'
import { Link } from 'react-router-dom'
import h from 'react-hyperscript'
import { Fragment as F } from 'react'

const { log } = global.console

// const { getItem, setItem, clear } = window.localStorage

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
  const fields = [ 'wiz1Info', 'wiz2Info', 'wiz3Info' ]
  const errors = { }
  fields.forEach(field => {
    if (!vals[field]) errors[field] = 'please enter a value'
  })
  return errors
}

// function passed to handleSubmit, logs the values entered
async function sub (vals) {
// no luck in getting or setting yet..
  log(vals)
}

// function that mad props are injected into. rendered the form field
const renderField = ({ label, meta, input }) => {
  // log(props)
  const { touched, error } = meta
  const butState = error
  let next = Number(label[label.length - 1]) + 1 < 4 ? Number(label[label.length - 1]) + 1 : 'results'
  // if (next === 4) next = 'results'
  return (
    h(F, [
      h('label', label),
      h('input', input),
      h(Link, { to: `/Wiz/${next}` }, [
        h('button', { type: 'submit', disabled: butState }, 'next')
      ]),
      error && touched && h('span', error)
    ])
  )
}

module.exports = { reqCount, addCount, validate, renderField, sub }

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

// old sub function
// const { dispatch, clearFields, form } = await props
// const field = await getField(form)
// await log(props)
// // await log(clearFields(false, form, 'wiz1Info').meta)
// await dispatch(clearFields(false, form, field))

// function getField(formName) {
//   switch (formName) {
//     case 'Wizard1': return 'wiz1Info'
//     case 'Wizard2': return 'wiz2Info'
//     case 'Wizard3': return 'wiz3Info'
//   }
// }
