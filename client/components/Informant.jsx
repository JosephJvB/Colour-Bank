import { Fragment, Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import h from 'react-hyperscript'

// const FIELDS = [
//   { label: 'hellow', type: 'input' },
//   { label: 'people', type: 'input' }
// ]

const { console } = global

class Informant extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    // binds go here
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // functions go here

  handleSubmit () {
    return console.log(this.props)
  }

  // renderForm (config, fields) {
  //   const helper = 'help'
  //   return (

  //   )
  // }

  render () {
    return (
      h('div', { 'className': 'columns has-text-centered' },
        h(Fragment, ['hi im informant',
          h('form', { 'onSubmit': this.handleSubmit },
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
            'onClick': () => console.log(this.props)
          },
          'lets larn'
          )
        // FIELDS.map(f => renderForm(f, FIELDS))
        ])
      )
    )
  }
}

// function validate (values) {
//   const errors = { }
//   FIELDS.forEach(f => {
//     if (!values[f]) errors[f] = `enter a ${f}`
//   })
//   return errors
// }

export default reduxForm({
  form: 'informant'
  // destroyOnUnmount: false  << doesnt seem to work..
  // fields: FIELDS.map(f => f.label), // label(name) and type(input, textarea)
  // validate
})(Informant)
