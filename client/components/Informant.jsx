import { Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import h from 'react-hyperscript'

// const FIELDS = [
//   { label: 'hellow', type: 'input' },
//   { label: 'people', type: 'input' }
// ]

async function show (values) {
  const name = await Object.keys(values)[0]
  const val = await Object.values(values)[0]
  await setTimeout(() => window.alert(`Field: ${name}, InputVal: ${val}`), 1000)
}

const { log } = global.console

let Informant = props => {
  // renderForm (config, fields) {
  //   const helper = 'help'
  //   return (

  //   )
  // }

  return (
    h('div', { 'className': 'columns has-text-centered', style: { marginTop: 100 } },
      h(Fragment, ['hi im informant',
        h('form', { 'onSubmit': props.handleSubmit(show) },
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
          'onClick': () => log(props)
        },
        'lets larn'
        ),
        props.submitting && log('yep'),
        !props.submitting && log('nup')
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
