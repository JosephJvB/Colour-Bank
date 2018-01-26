import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Field, reduxForm } from 'redux-form'
import { validate } from '../../utils'

const WizTwo = (props) => {
  const { next, prev } = props
  return (
    h(F, [
      'wiz2',
      h('button', {
        onClick: prev
      }, 'prev'),
      h('button', {
        onClick: next
      }, 'next')
    ])
  )
}

export default reduxForm({
  form: 'Wizard2',
  validate
})(WizTwo)
