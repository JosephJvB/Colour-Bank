import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { validate } from '../../utils'

const { log } = global.console

const WizTwo = (props) => {
  const { handleSubmit, renderField, sub } = props
  return (
    h(F, [
      'wiz2',
      h('form', { onSubmit: handleSubmit(sub) }, [
        h(Field, {
          name: 'wiz2Info',
          component: renderField,
          label: 'wiz2',
          type: 'text',
          placeholder: 'ur text here'
        }),
        h('button', { type: 'submit' }, 'submit')
      ]),
      h(Link, { to: '/Wiz/1' }, [
        h('button', {}, 'prev')
      ]),
      h('button', { onClick: () => log(props) }, 'props'),
      h(Link, { to: '/Wiz/3' }, [
        h('button', {}, 'next')
      ])
    ])
  )
}

export default reduxForm({
  form: 'Wizard2',
  destroyOnUnmount: false,
  validate
})(WizTwo)
