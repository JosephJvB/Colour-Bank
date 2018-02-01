import request from 'superagent'
import { Link } from 'react-router-dom'
import h from 'react-hyperscript'
import { Fragment as F } from 'react'

const { log } = global.console

// const { getItem, setItem, clear } = window.localStorage

const url = 'http://localhost:3000/'

function addCount (id, count) {
  return request
    .put(`${url}api/v1/${id}/${count}`)
}

function reqBigData () {
  return request
    .get(`${url}api/v1/all`)
}

function validate (vals) {
  // global.console.log(vals)
  const errors = { }
  const fields = [ 'wiz1Info', 'wiz2Info', 'wiz3Info' ]
  fields.forEach(field => {
    if (!vals[field]) errors[field] = '<-- value here :)'
  })
  return errors
}

// function passed to handleSubmit, logs the values entered
async function sub (vals) {
  // no luck in getting or setting yet..
  await log(vals)
}

// function that mad props are injected into. renders the field: input, error and submit / continue button
const renderField = ({ label, meta, input }) => {
  // log(meta)
  const { visited, error } = meta
  let next = Number(label[3]) + 1 < 4 ? Number(label[3]) + 1 : 'results'
  // if (next === 4) next = 'results'
  const but = !error ? 'is-success' : 'is-danger'
  input.autoComplete = 'off'
  return (
    h(F, [
      h('label', label),
      h('input', input),
      h(Link, { to: `/Wiz/${next}` }, [
        h('button', { type: 'submit', disabled: error, className: `button ${but}` }, 'next')
      ]),
      visited && error && h('span', error)
    ])
  )
}

module.exports = { reqBigData, addCount, validate, renderField, sub }

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
