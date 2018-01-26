import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Field, reduxForm } from 'redux-form'
import { validate } from '../../utils'

const WizThree = (props) => {
  const { prev } = props
  return (
    h(F, [
      'wiz3',
      h('button', {
        onClick: prev
      }, 'prev')
    ])
  )
}

export default reduxForm({
  form: 'Wizard3',
  validate
})(WizThree)
