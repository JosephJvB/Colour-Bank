import { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import h from 'react-hyperscript'

// const FIELDS = [
//   { label: 'hellow', type: 'input' },
//   { label: 'people', type: 'input' }
// ]

const { console } = global

let Informant = props => {
  function handleSubmit () {
    return console.log(props)
  }

  // renderForm (config, fields) {
  //   const helper = 'help'
  //   return (

  //   )
  // }

  return (
    h('div', { 'className': 'columns has-text-centered' },
      h(Fragment, ['hi im informant',
        h('form', { 'onSubmit': handleSubmit },
          [
            h(Field, {
              'name': 'testInput',
              'component': 'input',
              'type': 'text',
              'placeholder': 'nature enter me'
            }),
            h('button',
              { 'className': 'button is-large',
                'type': 'submit'
              },
              'sumbit'
            )
          ]),
        h('button', {
          'className': 'button is-large is-info',
          'onClick': () => console.log(props)
        },
        'lets larn'
        )
        // FIELDS.map(f => renderForm(f, FIELDS))
      ])
    )
  )
}

// function validate (values) {
//   const errors = { }
//   FIELDS.forEach(f => {
//     if (!values[f]) errors[f] = `enter a ${f}`
//   })
//   return errors
// }

Informant = reduxForm({
  form: 'informant'
  // destroyOnUnmount: false
  // fields: FIELDS.map(f => f.label), // label(name) and type(input, textarea)
  // validate
})(Informant)

const sel = formValueSelector('informant')
Informant = connect(state => {
  const value = sel(state, 'testInput')
  return {
    value
  }
})(Informant)

export default Informant
