import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { validate, sub, renderField } from '../../utils'

const { log } = global.console

const WizThree = (props) => {
  const { handleSubmit } = props
  return (
    h(F, [
      'wiz3',
      h('form', { onSubmit: handleSubmit(sub) }, [
        h(Field, {
          name: 'wiz3Info',
          component: renderField,
          label: 'wiz3',
          type: 'text',
          placeholder: 'ur text here'
        }),
        h('button', { type: 'submit' }, 'lol')
      ]),
      h(Link, { to: '/Wiz/2' }, [
        h('button', { className: 'button is-info' }, 'prev')
      ]),
      h('button', { onClick: () => log(props) }, 'props')
    ])
  )
}

export default reduxForm({
  form: 'Wizard3',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizThree)
